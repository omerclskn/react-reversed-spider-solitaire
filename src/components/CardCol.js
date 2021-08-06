import React, {useState, useEffect} from 'react'
import '../assets/css/card.css'
import Card from './Card'
import { useDrop } from 'react-dnd'

const CardCol = ({card_col}) => {

    let board = card_col

    //const [board, setBoard] = useState(card_col)
    /*
    const setDrop = (id) => {
        console.log(id)
        const dropped = board.filter((card) => id === (card.value + " " + card.deck))
        setBoard([...board, dropped])
    }*/

    console.log(card_col)
    /*
    const [{isOver}, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item) => setDrop(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));*/
    
    let cards = [];
    while(board !== null){
        cards.push(<Card item={board} id={ board.val.value + " " + board.val.deck } key={ board.val.value + " " + board.val.deck } /> )
        board = board.next
    }

    return (
        // wrap cards with row and inside the rows add new cards to get 10 * 6 card matrix
        <div 
        className="card-col">
            {cards}
        </div>
    )
}

export default CardCol
