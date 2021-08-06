import React from 'react'
import '../assets/css/board.css'
import CardCol from './CardCol'
import CardGenerator from '../CardGenerator'
import CardHolder from './CardHolder'

function Board() {

    // get cards from cardgenerator
    const {card_initial, card_rem} = CardGenerator()

    console.log(card_initial)

    let cards = []
    for (let index = 0; index < card_initial.length; index++) {
        console.log(card_initial[index], index)
        cards.push(<CardCol card_col={card_initial[index]} key={index} />)
    }

    return (
        <div className="board">
            {   // call cardrow component to display cards
                /*
                Object.keys(card_initial).map((sub, subindex) =>
                <CardCol card_col={card_initial[sub]} sub={sub} subindex={subindex} /> 

            )*/     cards
            }

                {
                // call carholder component to hold remaining cards
                card_rem.map((card, index) => <CardHolder key={index} card_rem={ card } index_val={index} /> )}
            
        </div>
    )
}

export default Board
