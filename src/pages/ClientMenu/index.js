import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import './index.scss';
import ItemCategory from '../../components/ItemCategory';
import HeaderNotes from '../../components/HeaderNotes';
import useDraggableScroll from 'use-draggable-scroll';
import { useRef } from 'react'
import { Redirect } from 'react-router'
import { url } from '../../constants'

export default function ClientMenu(props) {
    const [itemsCategories, setItemsCategories] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        const response = await fetch(url + '/items')
        let data = await response.json()

        let cat = []
        data.forEach((item) => {
            let idx = cat.findIndex(cat => cat.name == item.category)
            console.log(idx)
            if (idx === -1) {
                cat.push({
                    name: item.category,
                    items: [item]
                })
            } else {
                cat[idx].items.push(item)
            }
        })

        setItemsCategories(cat)
    }


    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });


    if (!sessionStorage.getItem('login')) {
        return <Redirect exact to="/login" />;
    }

    return (
        <div className='scroll-container variable-height '>
            <Header title='Cardápio' goBackButton route={{route:'/bill',state:props.location.state}}/>
            <div ref={ref} onMouseDown={onMouseDown} className='content-wrapper variable-height scroll-container '>
                <div className='menu-tooltip'>
                    <HeaderNotes title='Martini' description='Popularizado pelos filmes de James Bond, 007, na década de 1970' />
                </div>
                <div className='menu-list'>
                    {itemsCategories.map((category, index) => {
                        console.log(category)
                        return <ItemCategory
                            title={category.name}
                            items={category.items}
                            key={index}
                            order={props.location.state.order}
                        />
                    })}
                </div>
            </div>
        </div>
    )

}