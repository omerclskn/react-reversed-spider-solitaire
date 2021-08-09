import React, { useState, useEffect } from 'react'
import '../assets/css/card.css'
import CardTypeFinder from './CardTypeFinder'
import { useDrag } from 'react-dnd'
import linkedlist from './linkedlist'

const Card = ({item, id, onClick}) => {

    const [active, setActive] = useState(item.val.active)
    const [ card, setCard ] = useState(item)
    const [ anySelect, setAnySelect ] = useState(false)

    //console.log(item)
    
    const generateNewCard = (id) => {
        const newCard = {
            deck: +id[2],
            value: id[0],
            show: false,
            active: false
        }

        const cardLink = {
            val: newCard,
            next: null
        }

        return cardLink
    }

    const checkSelected = () => {
        let anySelected = document.getElementsByClassName("selectedCard");
        
        if(anySelected.length === 0) return false
        let selectedId = anySelected.item(0).id

        return generateNewCard(selectedId)
    }

    const handleClick = (item) => (e) => {
        if (!checkSelected()) {
             e.preventDefault()
        //console.log(item)
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
        
        for (let index = 0; index <= iter; index++) {
            head.val.active = true
            setActive(true)
            head = head.next
        }
            setAnySelect(true)   
        }else{
            console.log(item)
            item.next = checkSelected()
            console.log(item)
            setAnySelect(false)
            console.log(anySelect)
        }
       
    }
    
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
