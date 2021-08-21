import {
    Redirect,
    Switch
} from 'react-router-dom';
import './index.css';
import React, { useState } from 'react';

export default function Login() {
    const [cpf, setCpf] = useState('');
    if (localStorage.getItem('login')) {
        return <Redirect exact to="/" />;
    }
    const logar = () => {
        localStorage.setItem('login', true);
        localStorage.setItem('cpf', cpf);
        window.location.reload();
    };

    return (
        <div className="content">
            <h1>login</h1>
            <label>CPF</label>
            <input
                type="text"
                placeholder="Digite o seu CPF (Só os números)"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="input"
            />
            <button onClick={logar}>Acessar Comanda</button>
        </div>
    )
}
