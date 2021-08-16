import React from 'react'
import '../../assets/css/topNav.css'
import { Link } from 'react-router-dom'
import Timer from './Timer'

import restartIcon from '../../assets/images/restart.svg'
import undoIcon from '../../assets/images/undo.png'
import hintIcon from '../../assets/images/help.png'
import rulesIcon from '../../assets/images/rules.png'
import useWindowDimensions from '../useWindowDimensions'

const TopNav = ({clickUndo, clickHint}) => {

    const { height, width } = useWindowDimensions()

    const clickEvent = () => {
        window.location.reload()
    }
    
    return ( 
    <div className={ "top-nav " + (width < 640 ? "d-flex-col" : "") } >

        <div id="timer">
                <Timer />
            </div>

        <div className={"btn-wrap " + (width < 440 ? "d-flex-col" : "")}>
            <div className = "btn"
            onClick = { clickUndo } > 
            <img src={undoIcon} alt="Undo" />
            Undo 
        </div>

        <div className = "btn"
            onClick = { clickHint } > 
            <img src={hintIcon} alt="Hint" />
            Hint 
        </div>

            <div className = "btn"
                onClick={clickEvent} > 
                <img src={restartIcon} alt="Restart" />
                 Restart 
            </div>

        <Link to="/rules">
            <div className = "btn">
                <img src={rulesIcon} alt="Rules" />
                 Rules
            </div>
        </Link>
        </div>

    </div>
    )
}

export default TopNav