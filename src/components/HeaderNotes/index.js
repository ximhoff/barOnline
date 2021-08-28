import './index.scss'
import {MdLocalBar} from 'react-icons/md'
import {useHistory} from 'react-router-dom'

const HeaderNotes = ({title, description}) =>{

    return (
        <div className='header-notes'>    
            <div className='product-name'>{title} <MdLocalBar className='drink-icon'/> </div>
            <div className='product-description'>{description}</div>
        </div>
    )
}

export default HeaderNotes