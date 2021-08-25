import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { MdSearch, MdAdd } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import './index.scss';

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
      <Header title={'Comandas'} />
      <div className="container">
        <div className="input">
          <TextInput
            placeholder='Número da comanda'
            handleValue={(e) => console.log(e)}
            Icon={MdSearch}
          />
        </div>
        {orders.map((order, index) => {
          return <OrderCard
            orderInfo={{
              cpf: order.costumer,
              table: order.table,
              total: 300,
              status: order.status
            }}
            key={index}
          />
        })}
        <label className="label">CPF</label>
        <div className="new-order">
          <TextInput
            placeholder="Insira o CPF para criar uma nova comanda"
            handleValue={(e) => console.log(e)}
          />
        </div>
        <Button
          name="Ir para outra página"
          onClick={() => alert('Faz nada')}
          Icon={MdAdd}
        />
      </div>
    </>
  )
}
