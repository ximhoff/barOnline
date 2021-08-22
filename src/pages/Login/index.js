import {
    Redirect,
} from 'react-router-dom';
import './index.css';
import TextInput from '../../components/TextInput';
import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

export default function Login() {
    const [cpf, setCpf] = useState('');

    if (localStorage.getItem('login')) {
        return <Redirect exact to="/" />;
    }

    const logar = () => {
        if (cpf.length === 11) {
            localStorage.setItem('login', true);
            localStorage.setItem('cpf', cpf);
            window.location.reload();
        } else {
            alert('Insira um cpf válido!')
            window.location.reload();
        }
    };

    const handleCpf = (e) => {
        setCpf(e.target.value);
    }

    return (
        <div className="content">
            <h1>login</h1>
            <label>CPF</label>
            <TextInput
                text="asdf"
                handleValue={handleCpf}
                Icon={MdSearch}
            />
            <button onClick={logar}>Acessar Comanda</button>
        </div>
    )
}
