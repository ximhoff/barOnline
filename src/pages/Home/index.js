import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import './index.css';

export default function Home() {
    if (!localStorage.getItem('login')) {
        return <Redirect to={'/login'} />
    }
    return (
        <h1 className="teste">Deu bom</h1>
    )
}