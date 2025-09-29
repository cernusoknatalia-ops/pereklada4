import React, { useState, useEffect, useRef } from "react";

/*
  Коротко:
  - Перший варіант: https://libretranslate.de/translate (POST)
  - Фолбек: MyMemory (GET)
  - Debounce 600ms, щоб не бити API на кожен символ
  - Використовуйте REACT_APP_LIBRE_URL у .env якщо хочете локальний сервер: http://localhost:5000/translate
*/

const LIBRE_URL =
  process.env.REACT_APP_LIBRE_URL || "https://libretranslate.de/translate";
const MYMEMORY_URL = "https://api.mymemory.translated.net/get";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("en-uk"); // en-uk або uk-en
  const abortRef = useRef(null);

  // Debounce: 600ms після останнього набору
  useEffect(() => {
    if (!text.trim()) {
      setTranslated("");
      setError("");
      return;
    }
    const timer = setTimeout(() => doTranslate(text), 600);
    return () => {
      clearTimeout(timer);
      if (abortRef.current) abortRef.current.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, direction]);

  // helper: fetch з таймаутом + AbortController
  async function fetchWithTimeout(url, options = {}, timeout = 8000) {
    const controller = new AbortController();
    abortRef.current = controller;
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(id);
      return res;
    } finally {
      abortRef.current = null;
    }
  }

  async function doTranslate(q) {
    setLoading(true);
    setError("");
    setTranslated("");

    const [source, target] = direction.split("-");

    // 1) Спробувати LibreTranslate (POST)
    try {
      const res = await fetchWithTimeout(
        LIBRE_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q, source, target, format: "text" }),
        },
        8000
      );

      if (!res.ok) throw new Error(`Libre status ${res.status}`);
      const data = await res.json();
      // структура: { translatedText: "..." }
      if (data && data.translatedText) {
        setTranslated(data.translatedText);
        setLoading(false);
        console.log("Перекладено Libre:", data.translatedText);
        return;
      } else {
        throw new Error("Libre повернув порожнє тіло");
      }
    } catch (e) {
      console.warn("Libre не відповів:", e.message);
    }

    // 2) Фолбек — MyMemory (GET)
    try {
      const url = `${MYMEMORY_URL}?q=${encodeURIComponent(
        q
      )}&langpair=${source}|${target}`;
      const res2 = await fetchWithTimeout(url, {}, 8000);
      if (!res2.ok) throw new Error(`MyMemory status ${res2.status}`);
      const d2 = await res2.json();
      const text2 = d2?.responseData?.translatedText;
      if (text2) {
        setTranslated(text2);
        setLoading(false);
        console.log("Перекладено MyMemory:", text2);
        return;
      } else {
        throw new Error("MyMemory повернув порожнє тіло");
      }
    } catch (e2) {
      console.warn("MyMemory не відповів:", e2.message);
    }

    // Якщо обидва не відповіли
    setError("❌ Обидва сервіси недоступні або заблоковані (дивись консоль).");
    setLoading(false);
  }

  return (
    <section id="translator" className="card">
      <h2>Перекладач</h2>

      <div className="direction">
        <label>
          <input
            type="radio"
            name="dir"
            value="en-uk"
            checked={direction === "en-uk"}
            onChange={() => setDirection("en-uk")}
          />
          <span>Англ → Укр</span>
        </label>

        <label>
          <input
            type="radio"
            name="dir"
            value="uk-en"
            checked={direction === "uk-en"}
            onChange={() => setDirection("uk-en")}
          />
          <span>Укр → Англ</span>
          </label>
      </div>

      <textarea
        placeholder="Введіть текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {loading && <p>⏳ Переклад...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {translated && !loading && !error && <p>👉 {translated}</p>}
    </section>
  );
}
