import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Unos from "./Unos";
import Lista from "./Lista";

function App() {
  return (
    <Router>
      <div>
        {/* Bootstrap navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Moja Aplikacija</Link>
            <div>
              <Link className="btn btn-outline-primary me-2" to="/unos">Unos imena</Link>
              <Link className="btn btn-outline-success" to="/lista">Lista imena</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/unos" element={<Unos />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/" element={<Unos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

