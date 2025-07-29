import React from 'react'
import { useState } from "react";
import "./Login.css"

const login = () => {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
    console.log("date"); 'date'
  }

  return (
    <div>
      <div className="container">
        <form>
            <h1>Acesse o sistema</h1>
            <div className='input-style'>
                <input type="email" placeholder='Email'
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='input-style'> 
                <input type="passowrd" placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Entrar</button>
            <div className="lembrar">
                <label>
                    <input type="checkbox"/>
                    Lembre de min
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <div className="registrar">
              <p>
                Não tem uma conta? <a href="#">Registrar</a>
              </p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default login
