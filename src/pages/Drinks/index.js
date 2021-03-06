import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import {
  Radio,
  Checkbox,
} from '@material-ui/core';
import {
  MdArrowForward,
  MdArrowDownward,
  MdAdd
} from 'react-icons/md'
import './index.scss'
import { Redirect } from 'react-router'
import { url } from '../../constants'
import { useHistory } from 'react-router-dom';

export default function Drinks(props) {
  const history = useHistory()

  const [glassTypeIsEnable, setGlassTypeIsEnable] = useState(false)
  const [baseIsEnable, setBaseIsEnable] = useState(false)
  const [tastesIsEnable, setTastesIsEnable] = useState(false)
  const [fruitAndBarriesIsEnable, setFruitAndBarriesIsEnable] = useState(false)
  const [glassTypes, setGlassTypes] = useState([])
  const [glassType, setGlassType] = useState('')
  const [drinkItems, setDrinkItems] = useState([])
  const [bases, setBases] = useState([])
  const [tastes, setTastes] = useState([])
  const [fruitsAndBarries, setFruitsAndBarries] = useState([])

  useEffect(() => {
    getGlassTypes()
    getTastes()
    getBases()
    getTastes()
    getFruitsAndBarries()
  }, [])

  const handleCheckbox = (e) => {
    let data = drinkItems
    const index = data.indexOf(e.target.value)
    if (index > -1) {
      data.splice(index, 1)
    } else {
      data.push(e.target.value)
    }
    setDrinkItems(data)
    console.log(drinkItems);
  }

  const handleGlassType = (e) => {
    console.log(e.target.value)
    setGlassType(e.target.value)
  }

  const getGlassTypes = async () => {
    const response = await fetch(url + '/glassTypes')
    setGlassTypes(await response.json());
  }

  const getBases = async () => {
    const response = await fetch(url + '/bases')
    setBases(await response.json());
  }

  const getTastes = async () => {
    const response = await fetch(url + '/tastes')
    setTastes(await response.json());
  }

  const getFruitsAndBarries = async () => {
    const response = await fetch(url + '/fruitsAndBarries')
    setFruitsAndBarries(await response.json());

  }

  if (!sessionStorage.getItem('login')) {
    return <Redirect exact to="/login" />;
  }

  const registerDrink = async () => {
    if (glassType.length === 0) {
      alert('Selecionar um tipo de copo');
      return
    }
    if (drinkItems.length === 0) {
      alert('Adicionar itens ao drinks')
      return
    }
    let data = {
      id: 0,
      order: props.location.state.order.id,
      glassType: glassType,
      material: drinkItems
    }
    let request = await fetch(url + '/drinks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    props.location.state.order.items.push(4)
    request = await fetch(url + `/orders/${props.location.state.order.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props.location.state.order)
    })
    history.push("/bill", { order: props.location.state.order })
  }

  return (
    <>
      <Header title='Montar Drink' goBackButton route={{ route: '/bill' }} />
      <div className='content-wrapper'>
        <div className="drinks">
          <div className="title">Drink(numero)</div>
          <div
            className="item"
            onClick={(e) => setGlassTypeIsEnable(!glassTypeIsEnable)}>
            <label>
              Glass Type
            </label>
            {!glassTypeIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {glassTypes.map((glass, index) => {
            return (
              <div className="dropped" style={{ display: !glassTypeIsEnable ? 'none' : 'inherit' }} key={index}>
                <Radio
                  value={glass.name}
                  checked={glassType === glass.name}
                  color='primary'
                  onChange={handleGlassType}
                />
                <label>{glass.name}</label>
              </div>
            )
          })
          }
          <div
            className="item"
            onClick={(e) => setBaseIsEnable(!baseIsEnable)}>
            <label>
              Base
            </label>
            {!baseIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {
            bases.map((base, index) => {
              return (
                <div className="dropped" style={{ display: !baseIsEnable ? 'none' : 'inherit' }} key={index}>

                  <Checkbox
                    onChange={(e) => handleCheckbox(e)}
                    color="primary"
                    value={base.name}
                  />
                  {base.name}
                </div>
              )
            })
          }

          <div
            className="item"
            onClick={(e) => setTastesIsEnable(!tastesIsEnable)}>
            <label>
              Tastes
            </label>
            {!tastesIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {
            tastes.map((taste, index) => {
              return (
                <div className="dropped" style={{ display: !tastesIsEnable ? 'none' : 'inherit' }} key={index}>

                  <Checkbox
                    onChange={(e) => handleCheckbox(e)}
                    color="primary"
                    value={taste.name}
                  />
                  {taste.name}
                </div>
              )
            })
          }
          <div
            onClick={(e) => setFruitAndBarriesIsEnable(!fruitAndBarriesIsEnable)}
            className="item">
            <label>
              Fruit And Barries
            </label>
            {!fruitAndBarriesIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {
            fruitsAndBarries.map((fb, index) => {
              return (
                <div className="dropped" style={{ display: !fruitAndBarriesIsEnable ? 'none' : 'inherit' }} key={index}>

                  <Checkbox
                    onChange={(e) => handleCheckbox(e)}
                    color="primary"
                    value={fb.name}
                  />
                  {fb.name}
                </div>
              )
            })
          }
        </div>
        <div className='new-item'>
          <Button
            name="Novo Pedido"
            onClick={(e) => registerDrink()}
            Icon={MdAdd}
          />
        </div>
      </div>
    </>
  )
}
