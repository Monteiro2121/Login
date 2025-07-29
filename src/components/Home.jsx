import React from "react";

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div>
      <h1>Bem-vindo!</h1>
      {usuario ? (
        <p>Email logado: {usuario.email}</p>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
    </div>
  );
}
