import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <Router>
        <nav>
          <Link to="/">Beranda</Link>
          <Link to="/manage">Kelola Buku</Link>
        </nav>
        <main style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage" element={<Manage />} />
          </Routes>
        </main>
      </Router>
    </BookProvider>
  );
}

export default App;
