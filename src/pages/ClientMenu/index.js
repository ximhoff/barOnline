import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import './index.scss';
import ItemCategory from '../../components/ItemCategory';
import HeaderNotes from '../../components/HeaderNotes';
import useDraggableScroll from 'use-draggable-scroll';
import { useRef } from 'react'

export default function ClientMenu() {

    const [items, setItems] = useState([])

    const getItems = async () => {
        const response = await fetch('http://localhost:8000/items')
        setItems(await response.json());
    }

    var itensCategories = [5];
    itensCategories[0] = {};
    itensCategories[0].name = 'Drinks';

    itensCategories[1] = {};
    itensCategories[1].name = 'Petiscos';

    itensCategories[2] = {};
    itensCategories[2].name = 'Cervejas';

    itensCategories[3] = {};
    itensCategories[3].name = 'Vinhos';

    itensCategories[4] = {};
    itensCategories[4].name = 'Sobremesas';

    //produtcs.push({ name: 'dummy', description:'dummydummydummydummy', price:'100'})
    //produtcs.push({ name: 'dummy', description:'dummydummy', price:'10'})
    //produtcs.push({ name: 'dummy', description:'dummydummydummy', price:'50'})
    //array.push({ name: '', description:'', price:''})


    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });

    return (
        <div className='scroll-container variable-height '>
            <Header title='Cardápio' />
            <div ref={ref} onMouseDown={onMouseDown} className='content-wrapper variable-height scroll-container '>
                <div className='menu-tooltip'>
                    <HeaderNotes title='Martini' description='Popularizado pelos filmes de James Bond, 007, na década de 1970' />
                </div>
                <div className='menu-list'>
                    {itensCategories.map((itens, index) => {
                        return < ItemCategory title={itens.name} key={index} />
                    })}
                </div>
            </div>
        </div>
    )

}

                    // inside the scrollview
                    // return <MenuItem title={item.title} description={item.description} price={item.value}
                    //     infoButton={Button}
                    //     moneyButton={Button}
                    // />
                    // })}/>