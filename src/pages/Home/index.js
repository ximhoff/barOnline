import React, { useEffect, useState } from 'react';
import {
	Redirect,
} from 'react-router-dom';
import './index.css';

export default function Home() {

	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/petiscos')
			.then(response => response.json())
			.then(data => setProdutos(data))
	}, [])

	if (!localStorage.getItem('login')) {
		return <Redirect to={'/login'} />
	}

	return (
		<>
			{produtos.map((produto, index) => {
				return <h1 className="teste" key="index">{produto.nome}</h1>
			})}
		</>
	)
}
