import React, { useState, useEffect } from 'react'
import '../assets/css/card.css'
import CardTypeFinder from './CardTypeFinder'
import { useDrag } from 'react-dnd'

const Card = ({item, id}) => {

    const [active, setActive] = useState(item.val.active)
    //console.log(item)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(item)
        let iter = 0;
        let head = item;
        console.log("girdi")
        while(item.next !== null){
            let next_value = +item.next.val.value + 1;
            let cur_value = +item.val.value;

            if(next_value !== cur_value ) {
                return false
            }
            item = item.next
            iter += 1
        }

        console.log(item)
        console.log(head)
        
        for (let index = 0; index < iter; index++) {
            head.val.active = true
            setActive(true)
            head = head.next
        }
        
    }

    //const id = (item.value + " " + item.deck)
    //console.log(item)
    const cardType = CardTypeFinder({item})
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
            onClick={handleClick}
            className={"card " + (active ? 'selectedCard' : '') } 
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
