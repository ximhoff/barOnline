import './index.scss'
import {MdInfo} from 'react-icons/md'
import {MdAttachMoney} from 'react-icons/md'

const MenuItem = ({title,description, price, moneyButton, infoButton}) =>{
        const displayItemInfo = ()=>{
            console.log("Item Info Check")
        }

    return (
            <div className='item'>
                <div className='item-info'>
                    <h1 className='title'>{title}</h1>
                    <h2 className='description'>{description}</h2>
                </div>
                <div className='price'>
                    {moneyButton && <MdAttachMoney className='price-icon'/>}
                    <h1 className='price-value'>{price}</h1>
                </div>
                {infoButton && <MdInfo className='info-button' onClick={() => displayItemInfo()}/>}       
            </div>
    )
}

export default MenuItem