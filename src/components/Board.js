import React from 'react'
import '../assets/css/board.css'
import Card from './Card'
import CardCol from './CardCol'
import CardGenerator from '../CardGenerator'
import CardHolder from './CardHolder'

function Board() {

    // get cards from cardgenerator
    const {card_initial, card_rem} = CardGenerator()

    return (
        <div className="board">
            {   // call cardrow component to display cards
                card_initial.map((sub, subindex) =>
                <CardCol card_col={sub} key={subindex} /> )}

                {
                // call carholder component to hold remaining cards
                card_rem.map((card, index) => <CardHolder key={index} card_rem={ card } index_val={index} /> )}
            
        </div>
    )
}

export default Board
