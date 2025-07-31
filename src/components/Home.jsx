import React from "react";
import "./home.css";

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div className="dadoslogin">
      <h1>Bem-vindo! {usuario?.nome}</h1>
      {usuario ? (
        <>
          <h1>Seus dados</h1>
          <p>Cpf: {usuario.cpf}</p>
          <p>Celular: {usuario.celular}</p>
          <p>Data de nascimento: {usuario.dataNascimento}</p>
          <p>Email: {usuario.email}</p>
        </>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
    </div>
  );
}
