import './index.scss'
import {MdArrowBack} from 'react-icons/md'
import {useHistory} from 'react-router-dom'
const Header = ({title, goBackButton, route}) =>{

    const history = useHistory()
    const returnToPreviousPage = ()=>{
        history.push(route.route, route.state)
    }

    return (
        <div className='header-wrapper'>
            <div className='header'>
                {goBackButton && <MdArrowBack className='back-button' onClick={() => returnToPreviousPage()}/>} 
                <h1 className='title'>{title}</h1>
            </div>
        </div>
    )
}

export default Header