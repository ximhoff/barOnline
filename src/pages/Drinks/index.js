import React, { useState } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import {
  Radio,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import {
  MdArrowForward,
  MdArrowDownward,
  MdAdd
} from 'react-icons/md'
import './index.scss'

export default function Drinks() {
  const [glassTypeIsEnable, setGlassTypeIsEnable] = useState(false)
  const [baseIsEnable, setBaseIsEnable] = useState(false)
  const [tastesIsEnable, setTastesIsEnable] = useState(false)
  const [fruitAndBarriesIsEnable, setFruitAndBarriesIsEnable] = useState(false)
  const [glassType, setGlassType] = useState('')
  const [drinkItems, setDrinkItems] = useState([])
  const [glassTypes, setGlassTypes] = useState([])
  const [bases, setBases] = useState([])
  const [tastes, setTastes] = useState([])
  const [fruitsAndBarries, setFruitsAndBarries] = useState([])

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
    setGlassType(e.target.value)
  }

  const getGlassTypes = async () => {
    const response = await fetch('http://localhost:8000/glassType')
    setGlassTypes(await response.json());
  }

  const getBases = async () => {
    const response = await fetch('http://localhost:8000/bases')
    setBases(await response.json());
  }

  const getTastes = async () => {
    const response = await fetch('http://localhost:8000/tastes')
    setTastes(await response.json());
  }

  const getFruitsAndBarries = async () => {
    const response = await fetch('http://localhost:8000/fruitsAndBarries')
    setFruitsAndBarries(await response.json());
  }

  return (
    <>
      <Header title='Montar Drink' goBackButton={true} />
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
          {glassTypeIsEnable &&
            <>
              <div className="dropped">
                <Radio
                  value="Copo 1"
                  checked={glassType === "Copo 1"}
                  color='primary'
                  onChange={handleGlassType}
                />
                <label>Copo 1</label>
              </div>
              <div className="dropped">
                <Radio
                  value="Copo 2"
                  checked={glassType === "Copo 2"}
                  color='primary'
                  onChange={handleGlassType}
                />
                <label>Copo 2</label>
              </div>
            </>
          }
          <div
            className="item"
            onClick={(e) => setBaseIsEnable(!baseIsEnable)}>
            <label>
              Base
            </label>
            {!baseIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {baseIsEnable &&
            <>
              <div
                className="dropped">

                <Checkbox
                  onChange={(e) => handleCheckbox(e)}
                  color="primary"
                  value={'teste 1'}
                />
                Teste 1
              </div>
              <div
                className="dropped">
                <Checkbox
                  onChange={(e) => handleCheckbox(e)}
                  color="primary"
                  value={'teste 2'}
                />
                Teste 2
              </div>
            </>
          }

          <div
            className="item"
            onClick={(e) => setTastesIsEnable(!tastesIsEnable)}>
            <label>
              Tastes
            </label>
            {!tastesIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {tastesIsEnable &&
            <div className="dropped">asdfasdf</div>
          }
          <div
            onClick={(e) => setFruitAndBarriesIsEnable(!fruitAndBarriesIsEnable)}
            className="item">
            <label>
              Fruit And Barries
            </label>
            {!fruitAndBarriesIsEnable ? <MdArrowForward /> : <MdArrowDownward />}
          </div>
          {fruitAndBarriesIsEnable &&
            <div className="dropped">asdfasdf</div>
          }
        </div>
        <div className='new-item'>
          <Button
            name="Novo Pedido"
            onClick={() => alert('Faz nada')}
            Icon={MdAdd}
          />
        </div>
      </div>
    </>
  )
}
