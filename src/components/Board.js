import React from 'react'
import '../assets/css/board.css'
import CardRow from './CardRow'
import CardGenerator from '../CardGenerator'
import CardHolder from './CardHolder'

function Board() {

    const cards = CardGenerator()

    return (
        <div className="board">
            {   // call cardrow component to display cards 
                cards.filter((item, index) => (index < 6)).map((card, index) => <CardRow card_row={ card } index_val={index} /> )}

                {
                // call carholder component to hold remaining cards
                cards.filter((item, index) => (index >= 6)).map((card, index) => <CardHolder card_row={ card } index_val={index} /> )}
            
        </div>
    )
}

export default Board
