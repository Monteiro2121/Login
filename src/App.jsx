import "./App.css";
import Login from "./components/Login/";
import Home from "./components/Home";
import Registrar from "./components/Registrar"; 
import Senha from "./components/Senha"; 
import Resetsenha from "./components/Resetsenha"; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/senha" element={<Senha />} />
          <Route path="/reset" element={<Resetsenha />} />
        </Routes>
      </Router>
    </div>
  );
}
