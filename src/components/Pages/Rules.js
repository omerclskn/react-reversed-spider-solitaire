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
                    <li> You cannot undo in a row. Undo is triggered after you click a card so you cannot undo if any card selected.</li>
                    <li> You can undo after distribute new cards. </li>
                    <li> If you select any card and press hint, selected card will automatically replaced, if not cards that eligible for replacement are displayed for 2 seconds. </li>
                    <li> If any blank column exist, only A can be placed.  </li>
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
