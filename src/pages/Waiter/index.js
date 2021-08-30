import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { MdSearch, MdAdd } from 'react-icons/md';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';
import { Redirect, useHistory } from 'react-router';
import { url } from '../../constants'

export default function Waiter() {
  const history = useHistory()
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [items, setItems] = useState([])
  // const [totals, setTotals] = useState([])
  const [newCpf, setNewCpf] = useState('')

  useEffect(() => {
    getOrders();
  }, [])


  const getOrders = async () => {
    let response = await fetch(url + '/orders')
    let orders = await response.json();
    const aux = orders.filter(order => order.status === 'open')
    response = await fetch(url +'/items')
    let items = await response.json()
    setItems(items);

    let totalPrice = [];
    aux.forEach(order => {
      let tmp = 0;
      order.items.forEach(i => {
        const item = items.filter(item => item.id === i)[0];
        tmp += item.value;
      })
      order.total = tmp;
      // totalPrice.push(aux);
    })
    // setTotals(totalPrice);
    setOrders(aux)
    setFilteredOrders(aux);
  }
  const filterItems = (str) => {
    if(str =='') setFilteredOrders(orders);
    else{
      const data = orders.filter(item => item.id == str);
      setFilteredOrders(data);
    }
  }

  const createNewOrder = (str) => {
    fetch(url + '/orders/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id:0, costumer:str, table:"10", items:[], status:"open",hour:"20:00"})
    })
    alert("Comanda criada com sucesso")
    window.location.reload();
  }

  if (!sessionStorage.getItem('waiter')) {
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
              handleValue={(e) => filterItems(e.target.value)}
              Icon={MdSearch} inputType='number'
            />
          </div>
          <ScrollView Content={filteredOrders.map((order, index) => {
            return <OrderCard
              orderInfo={{
                cpf: order.costumer,
                ID: order.id,
                total: order.total,
                status: order.status
              }} onClick={(e) => history.push('/bill', { order: order })}
              key={index}
            />
          })} />
          <div className='new-order-container'>
            <label className="label">CPF</label>
            <div className="new-order">
              <Input className="center-text"
                placeholder="Insira o CPF para criar uma nova comanda"
                handleValue={(e) => setNewCpf(e.target.value)} inputType='number'
              />
            </div>
            <Button
              name="Adicionar Comanda"
              onClick={() => createNewOrder(newCpf)}
              Icon={MdAdd}
            />
          </div>
        </div>
      </div>
    </>
  )
}