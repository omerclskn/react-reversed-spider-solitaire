import React from 'react'
import {
    blankWrap
} from './Gameplay'
import '../assets/css/topNav.css'

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

const TopNav = ({remCards ,clickUndo, clickHint, clickRemCards, complete}) => {
    return ( 
    <div className="top-nav">
        
        <div className = "btn"
            onClick = { clickUndo } > Undo 
        </div>

        <div className = "btn"
            onClick = { clickHint } > Hint 
        </div>

        <div className="cardholders">
        {cardholders(clickRemCards, remCards.length/10)}
        </div>

        <div className = "blank-wrap" > 
        { blankWrap(complete) } 
        </div>
        
    </div>
    )
}

export default TopNav