import React, { useState } from 'react'
import { Fireworks } from 'fireworks-js/dist/react'
import '../assets/css/finish.css'
import Game from './Game'

const FinishPage = () => {

    const [game, setGame] = useState(false)

    const handleClick = () => {
        setGame(true)
    }

    const options = {
        speed: 15
    }

    const style = {
        left: 0,
        top: 100,
        width: '100%',
        height: '50%',
        position: 'fixed',
        background: 'url(../images/green_back.jpg)'
    }

    return (
        !game ?
    <div className="finish-wrap">
        
        <Fireworks options = {
            options
        }
        style = {
            style
        }
        > 
        <span>
            Congratulations You WON!!
            </span>
            < div
            className = "play-again"
            onClick = { handleClick } >
                Play Again </div>
        </Fireworks>

    </div> : <Game />
    )
}

export default FinishPage
