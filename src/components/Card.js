import React,{ useRef, useEffect } from 'react'
import '../assets/css/card.css'
import CardTypeFinder from './CardTypeFinder'
import { useDrag, useDrop } from 'react-dnd'

const Card = ({item, index_val, index}) => {

    const id = (index_val*10)+index

    const addImage = (id) => {
        console.log(id)
    }

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (id) => addImage(id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    const cardType = CardTypeFinder({item})

    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));

    const refs = [drag, drop]

    return (
        // after add class, position the cards via index_val and need to show card when its index is 0
        <div 
            //ref={drag}
            ref={drag}
            id={id}
            className={"card"} 
            style={{ 
            border: isDragging ? "2px solid red" : "0px",
            marginTop:((6-index_val)*20), 
            zIndex:6-index_val, 
            ...(index_val === 0 ? {background: (`var(${cardType})`), 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'} : {}), }}  >
        </div>
    )
}

export default Card
