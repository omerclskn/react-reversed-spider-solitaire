import React from 'react'
import '../assets/css/board.css'
import CardRow from './CardRow'
import CardGenerator from '../CardGenerator'
import CardHolder from './CardHolder'

function Board() {

    // get cards from cardgenerator
    const {card_initial, card_rem} = CardGenerator()

    return (
        <div className="board">
            {   // call cardrow component to display cards 
                card_initial.map((card, index) => <CardRow key={index} card_row={card} index_val={index} /> )}

                {
                // call carholder component to hold remaining cards
                card_rem.map((card, index) => <CardHolder key={index} card_rem={ card } index_val={index} /> )}
            
        </div>
    )
}

export default Board
