import './index.scss'
import MenuItem from '../MenuItem'
import Button from '../../components/Button';
import PropTypes from 'prop-types'

const ItemCategory = ({title, itens}) =>{

    var products = [6];
    products[0] = {};
    products[0].title = 'dummy';
    products[0].description = 'dummy dummy';
    products[0].value = "10,00";

    products[1] = {};
    products[1].title = 'dummy';
    products[1].description = 'dummy dummy dummy';
    products[1].value = "50,00";

    products[2] = {};
    products[2].title = 'dummy';
    products[2].description = 'dummy dummy dummy dummy';
    products[2].value = "65,00";
    
    products[3] = {};
    products[3].title = 'dummy';
    products[3].description = 'dummy dummy dummy dummy';
    products[3].value = "40,00";
    
    products[4] = {};
    products[4].title = 'dummy';
    products[4].description = 'dummy dummy dummy dummy';
    products[4].value = "100,00";
    
    products[5] = {};
    products[5].title = 'dummy';
    products[5].description = 'dummy dummy dummy dummy';
    products[5].value = "36,00";
    
    products[6] = {};
    products[6].title = 'dummy';
    products[6].description = 'dummy dummy dummy dummy';
    products[6].value = "32,00";

    return (
            <div className='item-category'>
                <h1 className='category-title'>{title}</h1>
                <li className='item-list'>
                {products.map((option, index) => {
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