import React from 'react'
import './index.scss'


const Button = ({name, onClick, Icon}) =>{
    return(
        <>
            <button className='default-button' onClick={onClick}> {Icon && <Icon className='button-icon'/>} {name}</button>
        </>
    )
}

export default Button