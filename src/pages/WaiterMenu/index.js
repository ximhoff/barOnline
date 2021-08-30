import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.scss';
import { MdSearch, MdArrowBack } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import MenuItem from '../../components/MenuItem';
import useDraggableScroll from 'use-draggable-scroll';
import { useRef } from 'react'
import { Redirect } from 'react-router';
import { url } from '../../constants'
export default function WaiterMenu({ order }) {

  useEffect(() => {
    getItems();
    getUser();
  }, [])

  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  const getItems = async () => {
    const response = await fetch('http://localhost:8000/items')
    const data = await response.json()
    setItems(data);
    setFilteredItems(data);
  }

  const filterItems = (str) => {
    const data = items.filter(item => item.name.toLowerCase().includes(str));
    setFilteredItems(data);
  }

  const getUser = () => {
    console.log(order);
    const user = localStorage.getItem('cpf')
    let data = {}
    const request = fetch(`http://localhost:8000/orders?cpf=${user}&status=open`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });

  return (

    <div className='scroll-container variable-height '>
      <Header title='Cardápio' goBackButton={MdArrowBack} />
      <div className='content-wrapper scroll-container variable-height' ref={ref} onMouseDown={onMouseDown}>
        <div className="item-search-menu">
          <TextInput
            placeholder='Nome do Item'
            handleValue={(e) => filterItems(e.target.value.toLowerCase())}
            Icon={MdSearch}
          />
        </div>

        <div className='waiter-menu-list' >
          {filteredItems.map((item, index) => {
            return <MenuItem title={item.name} price={item.value}
              infoButton={Button}
              moneyButton={Button} key={index}
            />
          })}
        </div>

      </div>
    </div>
  )

}