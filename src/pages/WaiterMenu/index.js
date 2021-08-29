import React from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.scss';
import { MdSearch, MdAdd } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import MenuItem from '../../components/MenuItem';
import useDraggableScroll from 'use-draggable-scroll';
import {useRef} from 'react'
import { Redirect } from 'react-router';

export default function WaiterMenu(){


    var products = [15];
    products[0] = {};
    products[0].title = 'dummy';
    products[0].description = 'dummy dummy';
    products[0].value = "10,00";

    products[1] = {};
    products[1].title = 'dummy';
    products[1].description = 'dummy dummy dummy';
    products[1].value = "50,00";

    products[2] = {};
    products[2].title = 'dummy';
    products[2].description = 'dummy dummy dummy dummy';
    products[2].value = "65,00";
    
    
    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });

    if (!sessionStorage.getItem('waiter')){
        return <Redirect exact to="/login" />;
    }



    return(
        
        <div className='scroll-container variable-height '>
            <Header title='Cardápio'/>
            <div className='content-wrapper scroll-container variable-height' ref={ref} onMouseDown={onMouseDown}>
                <div className="item-search-menu">
                <TextInput
                    placeholder='Nome do Item'
                    handleValue={(e) => console.log(e)}
                    Icon={MdSearch}
                />
                </div>
                
                <div  className='waiter-menu-list' >
                    {products.map((items, index) => {
                        return <MenuItem title={items.title} price={items.value}
                            infoButton={Button} 
                            moneyButton={Button} key={index}
                        /> 
                    })}
                </div>
               
            </div>
        </div>
    )

}