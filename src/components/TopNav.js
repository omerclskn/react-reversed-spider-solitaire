import React from 'react'
import {
    blankWrap
} from './Gameplay'
import '../assets/css/topNav.css'

const TopNav = ({clickUndo, clickHint, clickRemCards, complete}) => {
    return ( 
    <div className="top-nav">

        <div className = "btn"
            onClick = { clickUndo } > Undo 
        </div>

        <div className = "btn"
            onClick = { clickHint } > Hint 
        </div>

        <div className = "card cardholder"
            onClick = { clickRemCards } >
        </div>

        <div className = "blank-wrap" > 
        { blankWrap(complete) } 
        </div>
        
    </div>
    )
}

export default TopNav