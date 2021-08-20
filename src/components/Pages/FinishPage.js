import React, { useRef,useEffect } from 'react'
import { Fireworks } from 'fireworks-js/dist/react'
import '../../assets/css/finish.css'
import { Link } from 'react-router-dom'
import fireworkAudio from '../../assets/sound/firework.mp3'

const FinishPage = (props) => {

    const time = props.location.state?.time || 0   
    const click = props.location.state?.click || 0

    let audio = useRef();
    // start the audio when the component mounts using the useEffect hook
    useEffect(() => {
        audio.current = new Audio(fireworkAudio)
        audio.current.play()
    }, [])

    // Stop the audio when the component unmounts
    useEffect(() => {
        return () => {
            audio.current.pause()
        }
    }, [])

    const calculate = () => {
        const value = (2000 + 500) / ( time * click )
        
        return Math.ceil(value) * 100
    }

    const options = {
        speed: 15
    }

    const style = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
    }

    return (
    <div className="finish">

        <div className="finish-wrap">
        
            <div className="box">
                <h3> Congratulations You WON!! </h3>
                <div className="stats">
                    <span> You Finished in {time} Seconds </span>
                    <span> Your Click Rate is {click} </span>
                    <span> Calculated Score is { calculate() } </span>
                    <p>* Score is calculated by ( (completed decks * 250) + win bonus ) / (elapsed time * click rate) </p>
                </div>
            </div>

            <Link to="/">
            <div
            className = "btn play-again">
                Play Again </div>
            </ Link>
            </div>
            <Fireworks options = { options }
                    style = { style } >
        </Fireworks>

    </div>
    )
}

export default FinishPage
