import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button';
import { MdAdd,MdSearch} from 'react-icons/md'
import './index.scss';
import TextInput from '../../components/Input';

export default function Home() {

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
			{produtos.map((produto, i) => {
				return <h1 className="teste" key={i}>{produto.nome}</h1>
			})}
            <TextInput placeholder="Esse é o placeholder" handleValue={(e) => console.log(e)} Icon={MdSearch}/>
            <TextInput placeholder="Esse é o placeholder sem icone" handleValue={(e) => console.log(e)}/>
			<Button name="Adicionar" onClick={(e) => console.log(e)} Icon={MdAdd}  />
			<Button className="center-button" name="Teste sem icone" onClick={(e) => console.log(e)} />
		</>
	)
}
