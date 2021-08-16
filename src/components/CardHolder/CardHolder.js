import React from 'react'
import {
    blankWrap
} from '../../logic/ComponentCreate'
import '../../assets/css/cardholder.css'
import useWindowDimensions from '../useWindowDimensions'

const cardholders = (clickRemCards, remCardCount, width2) => {

    let marginValue = 0
    let cardHolderPush = []
    for (let index = 0; index < remCardCount; index++) {
        cardHolderPush.push(
            <div 
            style={{marginLeft: marginValue*( width2 > 810 ? 30 : 15),
            ...( width2 < 950 ? {height: width2 > 700 ? 90 : 50,
                                        width: width2 > 700 ? 65 : 36} : "")}}
            className = "card cardholder"
            onClick = { clickRemCards } >
        </div>
        )
        marginValue += 1
    }
    return cardHolderPush
}

const CardHolder = ({clickRemCards, remCards, complete}) => {

    const { height, width } = useWindowDimensions();

    return (
        <div className="top">
            <div className="cardholders">
        {cardholders(clickRemCards, remCards.length/10, width)}
        </div>

        <div className = "blank-wrap" > 
        { blankWrap(complete) } 
        </div>
        </div>
    )
}

export default CardHolder
