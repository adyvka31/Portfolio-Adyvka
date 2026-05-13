// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { useCursorSpotlight } from "./hooks/useCursorSpotlight";

function App() {
  useCursorSpotlight();

  return (
    <Router>
      <div className="spotlight"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
