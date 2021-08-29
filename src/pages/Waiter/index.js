import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { MdSearch, MdAdd } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';

export default function Waiter() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    const response = await fetch('http://localhost:8000/orders')
    setOrders(await response.json());
  }

  return (
    <>
      <Header title='Comandas' />
      <div className='content-wrapper'>
        <div className="container">
          <div className="command-search-menu">
            <TextInput
              placeholder='Número da comanda'
              handleValue={(e) => console.log(e)}
              Icon={MdSearch}
            />
          </div>

        
          <ScrollView Content={orders.map((order, index) => {
            return <OrderCard
              orderInfo={{
                cpf: order.costumer,
                table: order.table,
                total: 300,
                status: order.status
              }} onClick={(e) => console.log(e)}
              key={index}
            />
          })}/>
        
        <div className='new-order-container'>
            <label className="label">CPF</label>
            <div className="new-order">
              <TextInput className="center-text"
                placeholder="Insira o CPF para criar uma nova comanda"
                handleValue={(e) => console.log(e)}
              />
            </div>
            <Button
              name="Adicionar Comanda"
              onClick={() => alert('Faz nada')}
              Icon={MdAdd}
            />
          </div>
        </div>
      </div>
    </>
  )
}
