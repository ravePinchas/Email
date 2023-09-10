import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Email } from "./pages/Email";
export function App() {
  return (
    <section className="main-app">
      <header className="app-header">
        <section className="container">
          <h1>Log111</h1>
        </section>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </main>

      <footer>
        <section className="container">emailRights 2023 &copy;</section>
      </footer>
    </section>
  );
}
