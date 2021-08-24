import {
    Redirect,
} from 'react-router-dom';
import './index.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
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
            <div>
                <h1>Comanda</h1>
            </div>
            <div className="central-block">
                <label className="label">CPF</label>
                <div className="resize-input">
                    <TextInput
                        text="asdf"
                        handleValue={handleCpf}
                        Icon={MdSearch}
                        placeholder="Insira o CPF para acessar a comanda"
                    />
                </div>
                <div className="resize-button">
                    <Button
                        onClick={logar}
                        name="Acessar Comanda"
                        className="center-button"
                    />
                </div>
            </div>
        </div>
    )
}
