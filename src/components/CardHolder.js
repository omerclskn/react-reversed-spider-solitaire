import React from 'react'
import Card from './Card'
import '../assets/css/cardHolder.css'

const CardHolder = ({card_row, index_val}) => {
    return (
        <div className="cardholder">
            {console.log(card_row, index_val)}
            <Card />
        </div>
    )
}

export default CardHolder
