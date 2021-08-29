import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import { MdAdd } from 'react-icons/md';
import { MdAttachMoney } from 'react-icons/md'
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';
import { useHistory } from 'react-router-dom';
import {Redirect} from 'react-router'

export default function Bill() {
  const history = useHistory()
  const [order, setOrder] = useState([])
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getOrder();
  }, [])

  const getOrder = async () => {
    const response = await fetch('http://localhost:8000/orders')
    let data = await response.json()
    const filtered = data.filter(order => order.costumer === localStorage.getItem('cpf'))[0]
    setOrder(filtered)
    let aux = []
    let sum = 0
    for (let i = 0; i < filtered.items.length; i++) {
      const response = await fetch(`http://localhost:8000/items/${filtered.items[i]}`)
      aux.push(await response.json())
      sum += aux[i].value
    }
    setItems(aux);
    setTotal(sum)
  }
  if (!sessionStorage.getItem('login')){
    return <Redirect exact to="/login" />;
  }

  return (
    <>
      <Header title='Comanda' />
      <div className='content-wrapper'>
        <div className="container">
          <div className="bill-total">
            <div className="row">
              <div className="col-l">
                <label className="label">
                  Itens da Comanda
                </label>
              </div>
              <div className="col-r">
                < MdAttachMoney />
                <label>
                  {total}
                </label>
              </div>
            </div>
          </div>


          <ScrollView Content={items.map((item, index) => {
            return <OrderItem
              orderItem={{
                itemName: item.name,
                price: item.value,
                hour: order.hour
              }} onClick={(e) => console.log(e)}
              key={index}
            />
          })} />

          <div className='new-order-container'>
            <Button
              name="New Item"
              onClick={() => history.push('/clientmenu')}
              Icon={MdAdd}
            />
          </div>
        </div>
      </div>
    </>
  )
}
