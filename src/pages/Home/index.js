import React from 'react';
import {Redirect} from 'react-router-dom';
import Button from '../../components/Button';
import {MdAdd} from 'react-icons/md'
import './index.css';

export default function Home() {

    if (!localStorage.getItem('login')) {
        return <Redirect to={'/login'} />
    }

    return (
        <>
        <Button name="Adicionar" onClick={(e) => console.log(e) } Icon={MdAdd}/>
        <Button name="Teste sem icone" onClick={(e) => console.log(e) } />
        </>
    )
}