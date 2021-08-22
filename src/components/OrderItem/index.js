

import {MdAttachMoney, MdAlarm} from 'react-icons/md'
import './index.scss'
const OrderItem = ({orderItem}) => {

    return (
        <div className='order-item'>
            <div className='row'>
                <div className='col'>{orderItem.itemName}</div>
                <div className='col hightlight-text'><MdAttachMoney className='icon'/>{orderItem.price}</div>
                <div className='col hightlight-text'><MdAlarm  className='icon'/>{orderItem.hour}</div>
            </div>
    
    </div>
    )
}

export default OrderItem