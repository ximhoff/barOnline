import React from 'react'
import './index.scss'
import useDraggableScroll from 'use-draggable-scroll';
import {useRef} from 'react'

const ScrollView = ({className,Content}) => {
    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref);

    return (
        <div ref={ref} className='scroll-container' onMouseDown={onMouseDown}>
            {Content}
    </div>
    )
}

export default ScrollView