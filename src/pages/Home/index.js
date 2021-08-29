import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { MdAdd, MdSearch } from 'react-icons/md'
import './index.scss';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import OrderItem from '../../components/OrderItem';

export default function Home() {

	const history = useHistory()
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/itens')
			.then(response => response.json())
			.then(data => setProdutos(data))
	}, [])

	if (!localStorage.getItem('login')) {
		return <Redirect to={'/login'} />
	}

	return (
		<>
			<Header title="Comandas" />
			<TextInput placeholder="Esse é o placeholder" handleValue={(e) => console.log(e)} Icon={MdSearch} />
			<TextInput placeholder="Esse é o placeholder sem icone" handleValue={(e) => console.log(e)} />
			<Button name="Adicionar" onClick={(e) => console.log(e)} Icon={MdAdd} />
			<Button className="center-button"
				name="Ir para outra página"
				onClick={() => history.push('/dummy')} />
			<OrderCard orderInfo={{
				cpf: '029.430.470-31',
				table: 1,
				total: 100,
				status: 'open'
			}} />
			<OrderCard orderInfo={{
				cpf: '029.430.470-31',
				table: 2,
				total: 300,
				status: 'closed'
			}} />

			<OrderItem orderItem={{ itemName: 'Fritas', price: 20, hour: '10:00' }} />
			<OrderItem orderItem={{ itemName: 'Tabua de frios', price: 50, hour: '10:00' }} />
		</>
	)
}