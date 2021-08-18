import React from 'react'
import scoreIcon from '../../assets/images/trophy.png'

const ScoreBoard = ({complete}) => {
    return (
        <div className="scoreboard">
            <img src={scoreIcon} alt="Score" />
            Score: {complete * 250}
        </div>
    )
}

export default ScoreBoard
