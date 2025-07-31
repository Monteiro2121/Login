import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const dadosSalvos = JSON.parse(localStorage.getItem("usuario"));

    const loginValido = dadosSalvos?.email === email && dadosSalvos?.senha === senha;

    setErro(
      !dadosSalvos
        ? "Nenhum usuário registrado"
        : !loginValido
        ? "Email ou senha inválidos"
        : ""
    );

    if (loginValido) {
      navigate("/home");
    }
  };

  return (
    <div>
      <div className="containerlogin">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {erro && <p className="erro-login">{erro}</p>}

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
          <div className="lembrar">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <Link to="/senha">Esqueceu a senha ?</Link>
          </div>
          <button type="submit">Entrar</button>
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
