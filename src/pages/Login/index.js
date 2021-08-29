import {
    Redirect,
} from 'react-router-dom';
import './index.css';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import Button from '../../components/Button';
import React, { useState } from 'react';

export default function Login() {
    const [cpf, setCpf] = useState('');

    if (sessionStorage.getItem('waiter')) {
        return <Redirect exact to="/waiter" />;
    }else if(sessionStorage.getItem('login')){
        return <Redirect exact to="/bill" />;
    }

    const logar = () => {
        if (cpf.length === 11) {
            sessionStorage.setItem('login', true);
            sessionStorage.setItem('cpf', cpf);
            if(cpf == '00000000011'){
                sessionStorage.setItem('waiter', true)
            }else{
                sessionStorage.setItem('waiter', false)
            }

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
        <>
            <Header title="Comanda" />
            <div className='content-wrapper'>
                <div className="content">
                    <label className="label">CPF</label>
                    <div className="resize-input">
                        <TextInput
                            text="asdf"
                            handleValue={handleCpf}
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
        </>
    )
}
