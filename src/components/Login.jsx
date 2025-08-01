import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const emailSalvo = localStorage.getItem("emailLembrado");
    if (emailSalvo) {
      setEmail(emailSalvo);
      setLembrar(true);
    }
  }, []);

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
      if (lembrar) {
        localStorage.setItem("emailLembrado", email);
      } else {
        localStorage.removeItem("emailLembrado");
      }

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-style">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="lembrar">
            <label>
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              Lembre de mim
            </label>
            <Link to="/senha">Esqueceu a senha?</Link>
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
