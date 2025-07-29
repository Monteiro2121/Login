import "./App.css";
import Login from "./components/Login/";
import Home from "./components/Home";
import Registar from "./components/Registrar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </Router>
    </div>
  );
}
