import React, { useState } from 'react'
import '../assets/css/board.css'
import Card from './CardRow'
import CardGenerator from '../CardGenerator'

function Board() {

    const cards = CardGenerator()

    return (
        <div className="board">
            {
                cards.filter((item, index) => (index < 6)).map((card, index) => <Card card_row={ card } index_val={index} /> )
            }
            
        </div>
    )
}

export default Board
