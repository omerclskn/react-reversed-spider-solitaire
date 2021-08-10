import React, { useState, useEffect } from 'react'
import '../assets/css/card.css'
import CardTypeFinder from './CardTypeFinder'
import { useDrag } from 'react-dnd'
import linkedlist from './linkedlist'

const Card = ({item, id, onClick}) => {

    const [active, setActive] = useState(item.val.active)
    const [ card, setCard ] = useState(item)
    const [ anySelect, setAnySelect ] = useState(false)

    //const id = (item.value + " " + item.deck)
    //console.log(item)
    const cardType = CardTypeFinder(item)
    /*
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'card',
        id: id,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));*/

    return (
        // after add class, position the cards via index_val and need to show card when its index is 0
        <div 
            //ref={drag}
            id={id}
            className={"card " + (active ? 'selectedCard' : '') } 
            //onClick={handleClick(item)}
            style={{ 
            //marginTop:((6-index)*20), 
            //zIndex:6-index, 
            ...({background: (`var(${cardType})`), 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'}), }}  >
        </div>
    )
}

export default Card
