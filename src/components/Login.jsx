import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const emailValido = "teste@gmail.com";
  const senhaValida = "123456";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === emailValido && senha === senhaValida) {
      localStorage.setItem("usuario", JSON.stringify({ email }));
      navigate("/home");
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  return (
    <div>
      <div className="containerlogin">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-style">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-style">
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
          <div className="lembrar">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="registrar">
            <p>
              Não tem uma conta? <Link to="/registrar">Registrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
