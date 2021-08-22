import React from 'react'
import './index.scss'


const Button = ({name, onClick, Icon, className}) =>{
    return(
        <>
            <button className={'default-button ' + className} onClick={onClick}> {Icon && <Icon className='button-icon'/>} {name}</button>
        </>
    )
}

export default Button