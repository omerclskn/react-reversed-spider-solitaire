import React, { useRef,useEffect } from 'react'
import { Fireworks } from 'fireworks-js/dist/react'
import '../../assets/css/finish.css'
import { Link } from 'react-router-dom'
import fireworkAudio from '../../assets/sound/firework.mp3'

const FinishPage = () => {

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
            <Link to="/">
            <div
            className = "btn play-again">
                Play Again </div>
            </ Link>
        </Fireworks>

    </div>
    )
}

export default FinishPage
