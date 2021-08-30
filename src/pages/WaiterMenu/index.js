import React, { useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.scss';
import { MdSearch } from 'react-icons/md';
import Input from '../../components/Input';
import MenuItem from '../../components/MenuItem';
import useDraggableScroll from 'use-draggable-scroll';
import { useRef ,useEffect} from 'react'
import { Redirect } from 'react-router';
import {url} from '../../constants'
export default function WaiterMenu({order}) {

    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])


    useEffect(() => {
      getItems();
      getUser();
    }, [])
  
  
    const getItems = async () => {
      const response = await fetch(url + '/items')
      const data = await response.json()
      setItems(data);
      setFilteredItems(data);
    }
  
    const filterItems = (str) => {
      const data = items.filter(item => item.name.toLowerCase().includes(str));
      setFilteredItems(data);
    }
  
    const getUser = () => {
      const user = localStorage.getItem('cpf')
      let data = {}
      const request = fetch(url+ '/orders?cpf=${user}&status=open', {
        method: 'POST',
        body: JSON.stringify(data)
      })
    }

    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });


    if (!sessionStorage.getItem('waiter')){
        return <Redirect exact to="/login" />;
    }


    return (

        <div className='scroll-container variable-height '>
            <Header title='Pedido' />
            <div className='content-wrapper scroll-container variable-height' ref={ref} onMouseDown={onMouseDown}>
                <div className="item-search-menu">
                    <Input
                        placeholder='Nome do Item'
                        handleValue={(e) => filterItems(e.target.value.toLowerCase())}
                        Icon={MdSearch} inputType='text'
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