import React, { useState } from "react";
import axios from "axios";

export default function Auth({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // для реєстрації
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password },
        { withCredentials: true }
      );

      if (onClose) onClose();
    } catch (err) {
      alert(err.response?.data?.error || "Помилка входу");
    } finally {
      setLoading(false);
    }
  };

  const register = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username: name || username, password },
        { withCredentials: true }
      );

      alert(res.data.message || "Успішна реєстрація!");
      if (onClose) onClose();
    } catch (err) {
      alert(err.response?.data?.error || "Помилка реєстрації");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-box">
      <h2>{isRegister ? "Реєстрація" : "Вхід"}</h2>

      {isRegister && (
        <input
          placeholder="Ім'я користувача"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      {!isRegister && (
        <input
          placeholder="Ім'я користувача"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}

      <input
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={isRegister ? register : login} disabled={loading}>
        {loading ? "Зачекайте..." : isRegister ? "Зареєструватися" : "Увійти"}
      </button>

      <p
        onClick={() => setIsRegister(!isRegister)}
        style={{ cursor: "pointer", color: "#007bff" }}
      >
        {isRegister ? "Вже є акаунт? Увійти" : "Немає акаунту? Реєстрація"}
      </p>
    </div>
  );
}
