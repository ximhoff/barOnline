import './index.scss'
import {MdAdd} from 'react-icons/md'
import {MdAttachMoney} from 'react-icons/md'

const MenuItem = ({title,description, price, moneyButton, infoButton}) =>{
        const addItemInfo = ()=>{
            alert('adiciona item')
            //implementar comportamento
        }

    return (
            <div className='item'>
                <div className='item-info'>
                    <h1 className='item-title'>{title}</h1>
                    <h2 className='item-description'>{description}</h2>
                </div>
            
                {moneyButton && <MdAttachMoney className='price-icon'/>}
                <h1 className='price-value'>{price}</h1>
                
                {infoButton && <MdAdd className='info-button' onClick={() => addItemInfo()}/>}       
            </div>
    )
}

export default MenuItem