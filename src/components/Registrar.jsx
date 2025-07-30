import React from 'react'
import { IMaskInput } from 'react-imask';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Registrar.css";

export default function Registrar() {
  return (
    <div>
      <div className="containerregister">
        <h1>Registrar-se</h1>
        <div className="input-row">
          <div className="input-style-persona">
            <input type="text" placeholder='Nome completo' required/>
            </div>
            <div className="input-style-persona">
            <input type="email" placeholder='Email' required/>
            </div>  
            </div>
            <div className="input-row2">
            <div className="input-style-data">
            <input type="date" required/>
            </div> 
            <div className="input-style-data">
            <IMaskInput type="text" mask="000.000.000-00" placeholder='Cpf' required/>
            </div> 
            <div className="input-style-data">
            <IMaskInput type="text" mask="(00) 000000-0000" placeholder='Celular' required/>
            </div> 
            </div>
            <div className="input-row3">
            <div className="input-style-senha">
            <input type="Password" placeholder='Senha' required/>
            </div> 
            <div className="input-style-senha">
            <input type="Password" placeholder='Senha' required/>
            </div> 
            </div>
            <button type="submit">Entrar</button>
            <div className="logar">
            <label>
              <label/>
              Já tem uma conta?
            </label>
            <Link to="/login"> Logar</Link>
          </div>
      </div>
    </div>
  );
}
