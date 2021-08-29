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
  const [items, setItems] = useState([])
  const [totals, setTotals] = useState([])

  useEffect(() => {
    getOrders();
    getItems();
    calcTotals();
  }, [items])

  const getOrders = async () => {
    const response = await fetch('http://localhost:8000/orders')
    const data = await response.json();
    const aux = data.filter(order => order.status === 'open')
    setOrders(aux);
  }

  const getItems = async () => {
    const response = await fetch('http://localhost:8000/items')
    setItems(await response.json());
  }

  const calcTotals = () => {
    let data = [];
    orders.forEach(order => {
      let aux = 0;
      order.items.forEach(i => {
        const item = items.filter(item => item.id === i)[0];
        aux += item.value;
      })
      data.push(aux);
    })
    setTotals(data);
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
                total: totals[index],
                status: order.status
              }} onClick={(e) => console.log(e)}
              key={index}
            />
          })} />
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
