import './index.scss'
import MenuItem from '../MenuItem'
import Button from '../../components/Button';
import PropTypes from 'prop-types'

const ItemCategory = ({title, items}) =>{

    return (
            <div className='item-category'>
                <h1 className='category-title'>{title}</h1>
                <li className='item-list'>
                {items.map((option, index) => {
                    return < MenuItem title={option.title} description={option.description} price={option.value}
                         infoButton={Button}
                         moneyButton={Button} key={index}/>
                })}
                </li>
            </div>
    )
}

ItemCategory.propTypes = {
    itens: PropTypes.array,
}

export default ItemCategory