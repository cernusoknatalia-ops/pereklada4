import React, { useState } from "react";
import axios from "axios";

export default function Auth({ onClose, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password },
        { withCredentials: true }
      );
      if (onSuccess) onSuccess();
    } catch (err) {
      alert(err.response?.data?.error || "Помилка входу");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username: name || username, password },
        { withCredentials: true }
      );
      alert(res.data.message || "Успішна реєстрація!");
      if (onSuccess) onSuccess();
    } catch (err) {
      alert(err.response?.data?.error || "Помилка реєстрації");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-box">
      {/* Хрестик закриття */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      >
        ×
      </button>

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

      <div style={{ position: "relative" }}>
        <input
          placeholder="Пароль"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", paddingRight: "35px" }}
        />
      </div>

      <button
        className="logout-btn"
        onClick={isRegister ? handleRegister : handleLogin}
        disabled={loading}
        style={{ width: "100%", marginTop: "15px" }}
      >
        {loading ? "Зачекайте..." : isRegister ? "Зареєструватися" : "Увійти"}
      </button>

      <p
        onClick={() => setIsRegister(!isRegister)}
        style={{
          cursor: "pointer",
          color: "#007bff",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        {isRegister ? "Вже є акаунт? Увійти" : "Немає акаунту? Реєстрація"}
      </p>
    </div>
  );
}
