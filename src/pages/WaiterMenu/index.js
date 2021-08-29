import React, { useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.scss';
import { MdSearch } from 'react-icons/md';
import TextInput from '../../components/TextInput';
import MenuItem from '../../components/MenuItem';
import useDraggableScroll from 'use-draggable-scroll';
<<<<<<< HEAD
import { useRef } from 'react'
=======
import {useRef} from 'react'
import { Redirect } from 'react-router';
>>>>>>> 453477470797436eea8701b2194c5f7842b3c5ea

export default function WaiterMenu() {

    const [items, setItems] = useState([])

    const getItems = async () => {
        const response = await fetch('http://localhost:8000/items')
        setItems(await response.json());
    }


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
<<<<<<< HEAD

    products[3] = {};
    products[3].title = 'dummy';
    products[3].description = 'dummy dummy dummy dummy';
    products[3].value = "40,00";

    products[4] = {};
    products[4].title = 'dummy';
    products[4].description = 'dummy dummy dummy dummy';
    products[4].value = "100,00";

    products[5] = {};
    products[5].title = 'dummy';
    products[5].description = 'dummy dummy dummy dummy';
    products[5].value = "36,00";

    products[6] = {};
    products[6].title = 'dummy';
    products[6].description = 'dummy dummy dummy dummy';
    products[6].value = "32,00";

    products[7] = {};
    products[7].title = 'dummy';
    products[7].description = 'dummy dummy dummy dummy';
    products[7].value = "32,00";

    products[8] = {};
    products[8].title = 'dummy';
    products[8].description = 'dummy dummy dummy dummy';
    products[8].value = "32,00";

    products[9] = {};
    products[9].title = 'dummy';
    products[9].description = 'dummy dummy dummy dummy';
    products[9].value = "32,00";

    products[10] = {};
    products[10].title = 'dummy';
    products[10].description = 'dummy dummy dummy dummy';
    products[10].value = "32,00";

    products[11] = {};
    products[11].title = 'dummy';
    products[11].description = 'dummy dummy dummy dummy';
    products[11].value = "32,00";
=======
    
    
    const ref = useRef(null);
>>>>>>> 453477470797436eea8701b2194c5f7842b3c5ea

    const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });

    if (!sessionStorage.getItem('waiter')){
        return <Redirect exact to="/login" />;
    }


<<<<<<< HEAD

    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });
=======
>>>>>>> 453477470797436eea8701b2194c5f7842b3c5ea

    return (

        <div className='scroll-container variable-height '>
            <Header title='Cardápio' />
            <div className='content-wrapper scroll-container variable-height' ref={ref} onMouseDown={onMouseDown}>
                <div className="item-search-menu">
                    <TextInput
                        placeholder='Nome do Item'
                        handleValue={(e) => console.log(e)}
                        Icon={MdSearch}
                    />
                </div>

                <div className='waiter-menu-list' >
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