import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div className="dadoslogin">
      <h1>Bem-vindo, {usuario?.nome} !</h1>
      {usuario ? (
        <>
          <h2>Seus dados</h2>
          <p>Cpf: {usuario.cpf}</p>
          <p>Celular: {usuario.celular}</p>
          <p>Data de nascimento: {usuario.dataNascimento}</p>
          <p>Email: {usuario.email}</p>
          <Link to="/login">Deslogar</Link>
        </>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
    </div>
  );
}
