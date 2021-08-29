import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.scss';
import { MdSearch } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import MenuItem from '../../components/MenuItem';
import useDraggableScroll from 'use-draggable-scroll';
import { useRef } from 'react'

export default function WaiterMenu() {

  useEffect(() => {
    getItems();
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

  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });

  return (

    <div className='scroll-container variable-height '>
      <Header title='Cardápio' />
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