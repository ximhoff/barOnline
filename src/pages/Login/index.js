import {
    Redirect, useHistory,
} from 'react-router-dom';
import './index.css';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import React, { useState } from 'react';
import { url } from '../../constants'

export default function Login() {
    const [cpf, setCpf] = useState('');
    const history = useHistory()


    if (sessionStorage.getItem('waiter')) {
        history.push('/waiter')
    }else if(sessionStorage.getItem('login')){
        history.push('/bill')
    }


    const logar = async () => {
        if (cpf.length === 11) {
            let response = await fetch(url + '/orders?costumer=' + cpf)
            let order = await response.json();
            if(order.length > 0){
                sessionStorage.setItem('login', true);
                sessionStorage.setItem('cpf', cpf);
                history.push('/bill')
                return
            }
         
            else if(cpf == '00000000011'){
                sessionStorage.setItem('waiter', true)
                history.push('/waiter')
                return
            }else{
                alert("Essa comanda não foi cadastrado, contate um garçom.")
                window.location.reload();
            }

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
            <Header title="Login" />
            <div className='content-wrapper wrapper'>
                <div className="content">
                    <div className='login-wrapper'>
                        <label className="label">CPF</label>
                        <div className="resize-input">
                            <Input className='center-text'
                                text="asdf"
                                handleValue={handleCpf}
                                placeholder="Insira o CPF para acessar a comanda" inputType='number'
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
            </div>
        </>
    )
}
