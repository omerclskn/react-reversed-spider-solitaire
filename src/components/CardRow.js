import React from 'react'
import '../assets/css/card.css'
import Card from './Card'

const CardRow = ({card_row, index_val}) => {
    return (
        // wrap cards with row and inside the rows add new cards to get 10 * 6 card matrix
        <div className="card-row">
            {card_row.map((item) => <Card item={item} index_val={index_val} /> )}
        </div>
    )
}

export default CardRow
