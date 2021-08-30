import './index.scss'
import MenuItem from '../MenuItem'
import Button from '../../components/Button';
import PropTypes from 'prop-types'

const ItemCategory = (props) => {

    const title = props.title
    const items = props.items

    return (
        <div className='item-category'>
            <h1 className='category-title'>{title}</h1>
            <li className='item-list'>
                {items.map((option, index) => {
                    return < MenuItem
                        title={option.name}
                        description={option.description}
                        price={option.value}
                        infoButton={Button}
                        moneyButton={Button}
                        key={index}
                        order={props.order}
                        itemId={option.id}
                    />
                })}
            </li>
        </div>
    )
}

ItemCategory.propTypes = {
    itens: PropTypes.array,
}

export default ItemCategory