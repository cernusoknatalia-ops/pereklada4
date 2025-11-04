import React, { useState } from "react";
import axios from "axios";

export default function Auth({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Успішний вхід!");
      if (onClose) onClose();
    } catch (err) {
      alert(err.response?.data?.error || "Помилка входу");
    }
  };

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      alert("Успішна реєстрація!");
      if (onClose) onClose();
    } catch (err) {
      alert(err.response?.data?.error || "Помилка реєстрації");
    }
  };

  return (
    <div className="auth-box">
      <h2>{isRegister ? "Реєстрація" : "Вхід"}</h2>
      
      {isRegister && (
        <input 
          placeholder="Ім'я" 
          value={name}
          onChange={e => setName(e.target.value)} 
        />
      )}
      
      <input 
        placeholder="Email" 
        value={email}
        onChange={e => setEmail(e.target.value)} 
      />
      
      <input 
        placeholder="Пароль" 
        type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)} 
      />
      
      <button onClick={isRegister ? register : login}>
        {isRegister ? "Зареєструватися" : "Увійти"}
      </button>
      
      <p onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Вже є акаунт? Увійти" : "Немає акаунту? Реєстрація"}
      </p>
    </div>
  );
}