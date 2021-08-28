import './index.scss'
import {MdLocalBar} from 'react-icons/md'
import {useHistory} from 'react-router-dom'

const HeaderNotes = ({title, description}) =>{

    return (
        <div className='header-notes'>    
            <h1 className='product-name'>{title}</h1>
            {<MdLocalBar className='drink-icon'/>} 
            <h2 className='product-description'>{description}</h2>
        </div>
    )
}

export default HeaderNotes