import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Translator from "./components/Translator";
import Dictionary from "./components/Dictionary";
import Test from "./components/Test";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Навбар */}
        <nav className="navbar">
          <Link to="/" className="nav-btn">Переклад</Link>
          <Link to="/dictionary" className="nav-btn">Словник</Link>
          <Link to="/test" className="nav-btn">Тести</Link>
        </nav>

        {/* Основний контент */}
        <main>
          <Routes>
            <Route path="/" element={<Translator />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>

        {/* Футер */}
        <footer>
          © 2025 | Твій перекладач
        </footer>
      </div>
    </Router>
  );
}

export default App;
