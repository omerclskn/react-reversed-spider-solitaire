import React from 'react'
import '../../assets/css/rules.css'
import { Link } from 'react-router-dom'

const Rules = () => {
    return (
        <div className="container">
            <div className="context">
                <h1>Rules</h1>
                <ul>
                    <li> You should sort top to bottom as A, 2, 3, 4, 5, 6, 7, 8, 9, 10, K, Q, J. </li>
                    <li> You cannot undo in a row. Undo can triggered after you click a card so you cannot undo if select any card.</li>
                    <li> You have to click at least one card to get hint. </li>
                    <li> You can undo after distribute new cards. </li>
                    <li> If any blank column, only A can be placed.  </li>
                </ul>
            </div>
            <Link to="/">
            <div
            className = "btn rule">
                Play </div>
            </ Link>
        </div>
    )
}

export default Rules
