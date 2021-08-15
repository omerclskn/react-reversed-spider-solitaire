import React, { useState } from 'react'
import '../../assets/css/card.css'
import CardGenerator from '../../logic/CardGenerator'
import InfoBox from '../Footer/InfoBox'
import TopNav from '../Navbar/TopNav'
import {  
        clickGetCards, 
        checkComplete,
        firstClick, 
        secondClick,
        removeSelected,
        undoPlacement,
        getPrev,
        getHint,
        removeHighlight,
        cardsPush,
        undoPlacementDist
        }
        from '../../logic/Gameplay'
import { Redirect } from 'react-router-dom'
import shuffleAudio from '../../assets/sound/shuffle.mp3'
import flickAudio from '../../assets/sound/flick.mp3'
import wrongAudio from '../../assets/sound/wrong.mp3'

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

    const clickHint = () => {
        if (active) {
            if (getHint(allCards, highlighted)) {
                setCanUndo(true)
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
                removeSelected(prevCards.newHead, allCards)
                undoPlacement(allCards, prevCards)
                setPrevCards(null)
            }
            setCanUndo(false)
        } else{
            alert("You Cannot Undo in a Row")
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

            setRequest(newRequest)
            setRemCards(newRemCards)
            setCanUndo(true)
            setUndoDistribute(true)
            CompleteControl()
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
            }

            // reset variables for new processes, check if any completed decks
            setActive(false)
            setHighlighted({})
            CompleteControl()
            setUndoDistribute(false)
        }
    }

    const CompleteControl = () => {
        const { complete: newComplete  } = checkComplete(allCards, complete)
        newComplete !== complete && setCanUndo(false)
        setComplete(newComplete) // increase completed card value 
    }
    
    return (
        // wrap cards with column and inside the columns add new cards to get 4 * 6, 6 * 5 card matrix
        complete < 8 ?
        <div>

            <TopNav remCards={remCards} clickUndo={clickUndo} clickHint={clickHint} clickRemCards={clickRemCards} complete={complete} />

            <div 
            className="cards">
                { allCards.map((card, index) => (
                        <div className="cards-col"> 
                            { cardsPush(card, index, clickCard) }
                        </div>
                    ))
                }
            </div>

            <InfoBox />
        
        </div> : <Redirect to="/finish" />
 
    )
}

export default Game