import React from 'react'
import '../../assets/css/rules.css'
import { Link } from 'react-router-dom'

const Rules = () => {

    return (
        <div className="container">
            <div className="context">
                <h1>Rules</h1>
                <ul>
                    Undo Rules
                    <li> You can undo after success placement</li>
                    <li> You can undo after distribute new cards</li>
                    <li> You cannot undo in a row and after complete deck</li>
                    <li> Undo is triggered after you click a card so you cannot undo if any card selected.</li>

                    Hint Rules
                    <li> If you click the button when there is a selected card, it finds the eligible card and automatically replaces it.</li>
                    <li> If no card selected, cards that eligible for replacement are displayed for 2 seconds.</li>

                    Blank Area Rules
                    <li> You can relocate every card to blank columns. (Can be done with just click ) </li>
                    <li> You cannot get hint to blank areas.</li>
                    <li> You cannot deal new cards if any blank column exist. </li>
                </ul>
                <Link to="/">
            <div
            className = "btn rule">
                Play </div>
            </ Link>
            </div>
        </div>
    )
}

export default Rules
