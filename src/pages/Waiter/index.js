import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { MdSearch, MdAdd } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';
import { Redirect } from 'react-router';
import {url} from '../../constants'
import {useHistory} from 'react-router-dom'

export default function Waiter() {

  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [items, setItems] = useState([])
  const [totals, setTotals] = useState([])
  const [newCpf, setNewCpf] = useState([])

  useEffect(() => {
    getOrders();
  }, [])


  const getOrders = async () => {
    let response = await fetch(url + '/orders')
    let orders = await response.json();
    const aux = orders.filter(order => order.status === 'open')
    setOrders(aux);
    setFilteredOrders(aux);
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

  const filterItems = (str) => {
    const data = orders.filter(item => item.table == str);
    setFilteredOrders(data);
  }

  const createNewOrder = (str) => {
    orders.push({ id:1, costumer:"str", table:"1", itens:[], status:"open",hour:"20:00"})
  }

  const history = useHistory()

  const goToOrder = (str) => {
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
            <TextInput
              placeholder='Número da comanda'
              handleValue={(e) => filterItems(e.target.value)}
              Icon={MdSearch}
            />
          </div>
          <ScrollView Content={filteredOrders.map((order, index) => {
            return <OrderCard
              orderInfo={{
                cpf: order.costumer,
                table: order.table,
                total: totals[index],
                status: order.status
              }} onClick={() => history.push({
                pathname: '/bill',
                state: { detail: order.costumer }})} //console.log(e)
              key={index}
            />
          })} />
          <div className='new-order-container'>
            <label className="label">CPF</label>
            <div className="new-order">
              <TextInput className="center-text"
                placeholder="Insira o CPF para criar uma nova comanda"
                handleValue={(e) => setNewCpf(e.target.value)}
              />
            </div>
            <Button
              name="Adicionar Comanda"
              onClick={() => history.push('/bill')}
              Icon={MdAdd}
            />
          </div>
        </div>
      </div>
    </>
  )
}
