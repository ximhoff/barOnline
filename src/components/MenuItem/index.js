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
                    <div className='item-title'>{title}</div>
                    <div className='item-description'>{description}</div>
                </div>
            
                <div className='price-item'>
                    {moneyButton && <MdAttachMoney className='price-icon'/>}
                    <div className='price-value'>{price}</div>
                </div>
                {infoButton && <MdAdd className='info-button' onClick={() => addItemInfo()}/>}       
            </div>
    )
}

export default MenuItem