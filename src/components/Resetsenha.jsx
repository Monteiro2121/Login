import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Resetsenha.css";

export default function Resetsenha() {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [codigoDigitado, setCodigoDigitado] = useState('');
  const navigate = useNavigate();

  const handleAtualizar = () => {
    const codigoSalvo = localStorage.getItem("codigoReset");
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
      alert("Usuário não encontrado.");
      return;
    }

    if (codigoDigitado !== codigoSalvo) {
      alert("Código de confirmação inválido.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Atualiza a senha do usuário no localStorage
    const usuarioAtualizado = {
      ...usuario,
      senha: novaSenha
    };
    localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
    localStorage.removeItem("codigoReset");

    alert("Senha atualizada com sucesso!");
    navigate("/login");
  };

  return (
    <div>
      <div className="containerreset">
        <h1>Atualizar senha</h1>
        <div className="reset-row">
          <div className="reset-input">
            <input
              type="password"
              placeholder='Nova senha'
              required
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
          </div>
          <div className="reset-input">
            <input
              type="password"
              placeholder='Confirmar senha'
              required
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>
        </div>
        <div className="cody-input">
          <input
            type="text"
            placeholder='Código de confirmação'
            required
            value={codigoDigitado}
            onChange={(e) => setCodigoDigitado(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAtualizar}>Atualizar</button>
      </div>
    </div>
  );
}
