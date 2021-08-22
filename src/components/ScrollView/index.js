import React from 'react'
import './index.scss'
import '../../../node_modules/dragscroll/dragscroll.js'

const ScrollView = ({className,Content}) => {

    return (
        <div className='vertical-dragscroll' nochilddrag="True" >
            <div className={'wrapper-div' + className}>
                <ul className='results-left'>
                    <>
                    {Content}
                    </>
                </ul>
        </div>
    </div>
    )
}

export default ScrollView