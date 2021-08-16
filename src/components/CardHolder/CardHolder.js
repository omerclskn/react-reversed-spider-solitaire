import React from 'react'
import {
    blankWrap
} from '../../logic/ComponentCreate'
import '../../assets/css/cardholder.css'

const cardholders = (clickRemCards, remCardCount) => {
    let marginValue = 0
    let cardHolderPush = []
    for (let index = 0; index < remCardCount; index++) {
        cardHolderPush.push(
            <div 
            style={{marginLeft: marginValue*30}}
            className = "card cardholder"
            onClick = { clickRemCards } >
        </div>
        )
        marginValue += 1
    }
    return cardHolderPush
}

const CardHolder = ({clickRemCards, remCards, complete}) => {
    return (
        <div className="top">
            <div className="cardholders">
        {cardholders(clickRemCards, remCards.length/10)}
        </div>

        <div className = "blank-wrap" > 
        { blankWrap(complete) } 
        </div>
        </div>
    )
}

export default CardHolder
