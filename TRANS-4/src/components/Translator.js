import React, { useState, useEffect, useRef } from "react";

const LIBRE_URL =
  process.env.REACT_APP_LIBRE_URL || "https://libretranslate.de/translate";
const MYMEMORY_URL = "https://api.mymemory.translated.net/get";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("uk-en");
  const abortRef = useRef(null);

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
  }, [text, direction]);

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
      if (data?.translatedText) {
        setTranslated(data.translatedText);
        setLoading(false);
        return;
      } else throw new Error("Libre повернув порожнє тіло");
    } catch (e) {
      console.warn("Libre не відповів:", e.message);
    }

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
        return;
      } else throw new Error("MyMemory повернув порожнє тіло");
    } catch (e2) {
      console.warn("MyMemory не відповів:", e2.message);
    }

    setError("❌ Обидва сервіси недоступні або заблоковані (дивись консоль).");
    setLoading(false);
  }

  return (
    <section id="translator" className="translator-card">
      <h2>🌐 Перекладач</h2>

      <div className="tabs">
        <button
          className={direction === "uk-en" ? "tab active" : "tab"}
          onClick={() => setDirection("uk-en")}
        >
           Українська →  Англійська
        </button>
        <button
          className={direction === "en-uk" ? "tab active" : "tab"}
          onClick={() => setDirection("en-uk")}
        >
           English →  Українська
        </button>
      </div>

      <div className="translator-box">
        <textarea
          className="input-area"
          placeholder="Введіть текст..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="output-area">
          {loading && <p className="loading">⏳ Переклад...</p>}
          {error && <p className="error">{error}</p>}
          {translated && !loading && !error && (
            <p className="translated">👉 {translated}</p>
          )}
        </div>
      </div>
    </section>
  );
}
