import './index.scss'
import { MdAdd } from 'react-icons/md'
import { MdAttachMoney } from 'react-icons/md'
import { url } from '../../constants'
import { useHistory } from 'react-router'

const MenuItem = ({ title, description, price, moneyButton, infoButton, order, itemId }) => {
    const history = useHistory()
    const addItem = () => {
        order.items.push(itemId)
        fetch(url + `/orders/${order.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
        history.push("/bill", {order:order})
        
    }

    return (
        <div className='item'>
            <div className='item-info'>
                <div className='item-title'>{title}</div>
                <div className='item-description'>{description}</div>
            </div>

            <div className='price-item'>
                {moneyButton && <MdAttachMoney className='price-icon' />}
                <div className='price-value'>{price}</div>
            </div>
            {infoButton && <MdAdd className='info-button' onClick={() => addItem()} />}
        </div>
    )
}

export default MenuItem