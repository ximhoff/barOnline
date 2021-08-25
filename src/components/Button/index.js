import React from 'react'
import './index.scss'


const Button = ({name, onClick, Icon, className}) =>{
    return(
        <div className={'default-button ' + className}  onClick={onClick}>
        {Icon && <Icon className='button-icon'/>} {name}
        </div>
    )
}

export default Button