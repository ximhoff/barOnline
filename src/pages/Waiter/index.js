import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { MdSearch, MdAdd } from 'react-icons/md';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';
import { Redirect } from 'react-router';
import {url} from '../../constants'

export default function Waiter() {

  const [orders, setOrders] = useState([])
  const [items, setItems] = useState([])
  const [totals, setTotals] = useState([])

  useEffect(() => {
    getOrders();
  }, [])


  const getOrders = async () => {
    let response = await fetch(url + '/orders')
    let orders = await response.json();
    const aux = orders.filter(order => order.status === 'open')
    setOrders(aux);
    response = await fetch(url +'/items')
    let items = await response.json()
    setItems(items);

    let totalPrice = [];
    orders.forEach(order => {
      let aux = 0;
      order.items.forEach(i => {
        const item = items.filter(item => item.id === i)[0];
        aux += item.value;
      })
      totalPrice.push(aux);
    })
    setTotals(totalPrice);
  }



  if (!sessionStorage.getItem('waiter')){
    return <Redirect exact to="/login" />;
  }



  return (
    <>
      <Header title='Comandas' />
      <div className='content-wrapper'>
        <div className="container">
          <div className="command-search-menu">
            <Input
              placeholder='Número da comanda'
              handleValue={(e) => console.log(e)}
              Icon={MdSearch} inputType='number'
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
              <Input className="center-text"
                placeholder="Insira o CPF para criar uma nova comanda"
                handleValue={(e) => console.log(e)}
                inputType='number'
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
