import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import { MdAdd } from 'react-icons/md';
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';

export default function Bill() {
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
      <div className="container">
        <div className="bill-total">
          <div className="row">
            <div className="col-l">
              <label className="label">
                Itens da Comanda
              </label>
            </div>
            <div className="col-r">
              <label>
                R$ 500,00
              </label>
            </div>
          </div>
        </div>


        <ScrollView Content={orders.map((order, index) => {
          return <OrderItem
            orderItem={{
              itemName: order.items.toString(),
              price: 200,
              hour: order.hour
            }} onClick={(e) => console.log(e)}
            key={index}
          />
        })} />

        <div className='new-order-container'>
          <Button
            name="New Item"
            onClick={() => alert('Faz nada')}
            Icon={MdAdd}
          />
        </div>
      </div>
    </>
  )
}
