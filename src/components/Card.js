import React,{ useRef, useEffect } from 'react'
import '../assets/css/card.css'
import CardTypeFinder from './CardTypeFinder'
import { useDrag } from 'react-dnd'

const Card = ({item, id}) => {

    //const id = (item.value + " " + item.deck)

    const cardType = CardTypeFinder({item})

    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));

    return (
        // after add class, position the cards via index_val and need to show card when its index is 0
        <div 
            ref={drag}
            id={id}
            className={"card"} 
            style={{ 
            border: isDragging ? "2px solid red" : "0px",
            //marginTop:((6-index)*20), 
            //zIndex:6-index, 
            ...({background: (`var(${cardType})`), 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'}), }}  >
        </div>
    )
}

export default Card
