import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate, Link } from "react-router-dom";
import "./Registrar.css";

export default function Registrar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const dadosUsuario = {
      nome,
      email,
      dataNascimento,
      cpf,
      celular,
      senha
    };

    localStorage.setItem('usuario', JSON.stringify(dadosUsuario));

    alert("Cadastro salvo com sucesso!");
    navigate('/login');
  };

  return (
    <div>
      <div className="containerregister">
        <h1>Registrar-se</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-style-persona">
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="input-style-persona">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-row2">
            <div className="input-style-data">
              <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required
              />
            </div>
            <div className="input-style-data">
              <IMaskInput
                mask="000.000.000-00"
                placeholder="Cpf"
                value={cpf}
                onAccept={(value) => setCpf(value)}
                required
              />
            </div>
            <div className="input-style-data">
              <IMaskInput
                mask="(00) 00000-0000"
                placeholder="Celular"
                value={celular}
                onAccept={(value) => setCelular(value)}
                required
              />
            </div>
          </div>

          <div className="input-row3">
            <div className="input-style-senha">
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <div className="input-style-senha">
              <input
                type="password"
                placeholder="Confirmar Senha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Entrar</button>

          <div className="logar">
            <label>Já tem uma conta?</label>
            <Link to="/login"> Logar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
