import React, { useState } from 'react'
import '../../assets/css/card.css'
import CardGenerator from '../../logic/CardGenerator'
import TopNav from '../Navbar/TopNav'
import {  
        clickGetCards, 
        checkComplete,
        firstClick, 
        secondClick,
        removeCardOldPlace,
        undoPlacement,
        getPrev,
        getHint,
        removeHighlight,
        undoPlacementDist
        }
        from '../../logic/Gameplay'
import { cardsPush } from '../../logic/ComponentCreate'
import CardHolder from '../CardHolder/CardHolder'
import { Redirect } from 'react-router-dom'
import shuffleAudio from '../../assets/sound/shuffle.mp3'
import flickAudio from '../../assets/sound/flick.mp3'
import Timer from'../Navbar/Timer'

const Game = () => {

    const {
        card_initial,
        card_rem
    } = CardGenerator()

    const [ allCards, setAllCards ] = useState(card_initial) // contains all cards 
    const [ highlighted, setHighlighted ] = useState({}) // keeps highlighted card, set when every first click to card
    const [ active, setActive ] = useState(false) // active means we have highlighted card so if any click triggered need to control for placement
    const [ request, setRequest ] = useState(0) // request keeps how many deck of cards will come from remaining cards
    const [ remCards, setRemCards ] = useState(card_rem) // remaining cards
    const [ complete, setComplete ] = useState(0) // complete keeps how many decks will completed
    const [ prevCards, setPrevCards ] = useState(null)
    const [ canUndo, setCanUndo ] = useState(false)
    const [ undoDistribute, setUndoDistribute ] = useState(false)
    const [ totalClick, setTotalClick ] = useState(0)
    const [ time, setTime ] = useState(0)
    
    const handleTime = (time) => {
        setTime(time)
    }

    const clickHint = () => {
        if (active) {
            if (getHint(allCards, highlighted)) {
                setTotalClick(totalClick + 3)
                setCanUndo(true)
                setUndoDistribute(false)
            } else{
                alert("No Hint Found For This Card")
                removeHighlight(highlighted)
            }
            setActive(false)
        } else{
            alert("You need to click at least one card for hint")
        }
    }

    const clickUndo = () => {

        if (canUndo) {
            if (undoDistribute) {
                const prevRemCards = undoPlacementDist(allCards)
                setRemCards([...prevRemCards, ...remCards])
                setUndoDistribute(false)
            }
            else{
                removeCardOldPlace(prevCards.newHead, allCards)
                undoPlacement(allCards, prevCards)
                setPrevCards(null)
                setTotalClick(totalClick + 2)
            }
            setCanUndo(false)
        } else{
            alert("You Can Undo After Any Correct Placement or Distribute New Cards \n--- You Cannot Undo In a Row ---")
            active && removeHighlight(highlighted)
            setActive(false)
        }
    }

    const clickRemCards = () => {
        new Audio(shuffleAudio).play()
            const {
                request: newRequest,
                remCards: newRemCards
            } = clickGetCards(request, allCards, remCards)

            if (active) {
                setHighlighted({})
                removeHighlight(highlighted)
                setActive(false)
            }

            setRequest(newRequest)
            setRemCards(newRemCards)
            setCanUndo(true)
            setUndoDistribute(true)
            CompleteControl()
            setTotalClick(totalClick - 5)
    }

    const clickCard = (item, index) => (e) => {
        /* control the active variable, if active is true it means this is second click so need to check replacing
        but if false this means need to highlight or reject request */
        if (!active) {
            if (firstClick(item)) {
                const newHead = firstClick(item)
                const prevShow = getPrev(allCards, newHead)
                setActive(true)
                setHighlighted(newHead)
                setPrevCards({
                    index,
                    newHead,
                    removeIndex: null,
                    status: prevShow
                })
                setCanUndo(false)
            }
        } else {
            setPrevCards({
                ...prevCards,
                removeIndex: index
            })

            if(secondClick(item, highlighted, allCards, index)){
                setCanUndo(true)
                new Audio(flickAudio).play()
                setTotalClick(totalClick + 1)
            }

            // reset variables for new processes, check if any completed decks
            setActive(false)
            setHighlighted({})
            CompleteControl()
            setUndoDistribute(false)
        }
    }

    const CompleteControl = () => {
        const { complete: newComplete  } = checkComplete(allCards, complete, true)
        newComplete !== complete && setCanUndo(false)
        setComplete(newComplete) // increase completed card value 
    }
    
    return (
        // wrap cards with column and inside the columns add new cards to get 4 * 6, 6 * 5 card matrix
        complete < 2 ?
        <div>
            <TopNav clickUndo={clickUndo} clickHint={clickHint} complete={complete} handleTime={handleTime}/>

            <CardHolder clickRemCards={clickRemCards} remCards={remCards} complete={complete} />

            <div 
            className="cards">
                { allCards.map((card, index) => (
                        <div className="cards-col"> 
                            { cardsPush(card, index, clickCard) }
                        </div>
                    ))
                }
            </div>
        
        </div> : <Redirect to={{
            pathname: "/finish",
            state: { time: time,
                    click: totalClick }
        }} />
 
    )
}

export default Game