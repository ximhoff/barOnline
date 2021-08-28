import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.scss';
import ScrollView from '../../components/ScrollView';
import MenuItem from '../../components/MenuItem';
import ItemCategory from '../../components/ItemCategory';
import HeaderNotes from '../../components/HeaderNotes';

export default function ClientMenu(){

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

    return(
        <>
            <Header title='Cardápio'/>
            <div className='header-notes'>
                <HeaderNotes title='Martini' description='Popularizado pelos filmes de James Bond, 007, na década de 1970'/>
            </div>
            <div className='menu-list'>
                {itensCategories.map((itens, index) => {
                    return < ItemCategory title={itens.name} /> 
                    })}
            </div>   
        </>
    )

}

                    // inside the scrollview
                    // return <MenuItem title={item.title} description={item.description} price={item.value}
                    //     infoButton={Button}
                    //     moneyButton={Button}
                    // />
                    // })}/>