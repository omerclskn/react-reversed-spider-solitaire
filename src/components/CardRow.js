import React, {useState} from 'react'
import '../assets/css/card.css'
import Card from './Card'

const CardRow = ({card_row, index_val}) => {


    return (
        // wrap cards with row and inside the rows add new cards to get 10 * 6 card matrix
        <div className="card-row" /*ref={drop}*/>
            {card_row.map((item, index) => <Card key={index} item={item} index_val={index_val} index={index} /> )}
        </div>
    )
}

export default CardRow
