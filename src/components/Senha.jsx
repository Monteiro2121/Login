import React, { useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./Senha.css";

export default function Senha() {
  const form = useRef();
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const nomeUsuario = usuario?.nome || "";

  const sendEmail = (e) => {
    e.preventDefault();

    const codigo = Math.floor(100000 + Math.random() * 900000);
    form.current.message.value = `Seu código de recuperação é: ${codigo}`;
    localStorage.setItem("codigoReset", codigo);

    emailjs.sendForm('service_1endya5', 'template_epopnup', form.current, 'lNcVAs2SxIrOGrEJh')
      .catch((error) => {
        console.log('Erro ao enviar e-mail:', error.text);
      });

    navigate("/reset", { state: { enviado: true } });
  };

  return (
    <div>
      <div className="containersenha">
        <h1>Resetar senha</h1>

        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="from_nome" value={nomeUsuario} />
          <input type="hidden" name="message" />

          <div className="email">
            <input type="email" name="user_email" placeholder="E-mail de recuperação" required/>
          </div>
          <button type="submit">Enviar</button>
        </form>

        <div className="voltarlogin">
          <p><Link to="/login">Voltar</Link></p>
        </div>
      </div>
    </div>
  );
}
