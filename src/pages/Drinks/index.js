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

  return (
    <>
      <Header title='Montar Drink' goBackButton={true} />
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
          <div className="dropped">
            <Radio
              checked={true}
              onChange={(e) => setGlassTypeIsEnable(true)}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
              label="asdf"
            />
          </div>
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
          <FormControlLabel
            className="dropped"
            control={
              <Checkbox
                checked={baseIsEnable}
                onChange={(e) => console.log('parabens')}
                name="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />

        }
        <div>
          <label
            onClick={(e) => setTastesIsEnable(!tastesIsEnable)}
            className="item">
            Tastes
          </label>
          {tastesIsEnable &&
            <div className="dropped">asdfasdf</div>
          }
        </div>
        <div>
          <label
            onClick={(e) => setFruitAndBarriesIsEnable(!fruitAndBarriesIsEnable)}
            className="item">
            Fruit And Barries
          </label>
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
