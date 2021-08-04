import React from 'react'
import '../assets/css/card.css'
import CardCol from './Card'

const Card = ({card_row, index_val}) => {
    return (
        <div className="card-row">

            {card_row.map((item) => <CardCol item={item} index_val={index_val} /> )}
        </div>
    )
}

export default Card
