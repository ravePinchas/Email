import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Email } from "./pages/EmailIndex";
import { AppHeader } from "./cmps/AppHeader";
import { AppFooter } from "./cmps/AppFooter";
import { EmailDetails } from "./pages/EmailDetails";
export function App() {
  return (
    <section className="main-app">
      <AppHeader />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />}>
            <Route path="/email/inbox" element={<Email />} />
            <Route path="/email/stared" element={<Email />} />
            <Route path="/email/sent" element={<Email />} />
            <Route path="/email/draft" element={<Email />} />
            <Route path="/email/trash" element={<Email />} />
          </Route>

          <Route path="/email/:emailId" element={<EmailDetails />} />
        </Routes>
      </main>

      <AppFooter />
    </section>
  );
}
