import React from 'react'
import '../assets/css/infobox.css'
import Timer from './Timer'

const InfoBox = ({request, complete}) => {

    const clickEvent = () => {
        window.location.reload()
    }

    return (
        <div className="infobox">
            <div>
                <div> Decks in Reserve: { 5 - request } </div> 
                <div> Completed Decks: { complete } </div> 
            </div>

            <div id="timer">
                <Timer />
            </div>

            <div className = "restart"
                onClick={clickEvent} > Restart Game 
            </div>
        </div>
    )
}

export default InfoBox
