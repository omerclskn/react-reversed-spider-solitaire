import React, {useState, useEffect} from 'react'
import '../assets/css/card.css'
import Card from './Card'
import { useDrop } from 'react-dnd'

const CardCol = ({card_col}) => {

    const [board, setBoard] = useState(card_col)

    const setDrop = (id) => {
        console.log(id)
        const dropped = board.filter((board) => id === (board.value + " " + board.deck))
        setBoard([...board, dropped])
    }

    console.log(board)

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => setDrop(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    return (
        // wrap cards with row and inside the rows add new cards to get 10 * 6 card matrix
        <div 
        ref={drop}
        className="card-col">
            {board.map((item, index) => <Card key={index} item={item} id={item.value + " " + item.deck} /> )}
        </div>
    )
}

export default CardCol
