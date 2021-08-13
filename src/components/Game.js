import React, { useState } from 'react'
import '../assets/css/card.css'
import CardGenerator from '../CardGenerator'
import FinishPage from './FinishPage'
import InfoBox from './InfoBox'
import TopNav from './TopNav'
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
        cardsPush
        }
        from './Gameplay'

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

    const clickHint = () => {
        if (active) {
            if (getHint(allCards, highlighted)) {
                setCanUndo(false)
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
         removeSelected(prevCards.newHead, allCards)
         undoPlacement(allCards, prevCards)
         setPrevCards(null)
         setCanUndo(false)
        } else{
            alert("You Cannot Undo in a Row, After distribute new cards, after get hint")
            active && removeHighlight(highlighted)
            setActive(false)
        }
    }

    const clickRemCards = () => {
        if (request < 5) {
            const {
                request: newRequest,
                remCards: newRemCards
            } = clickGetCards(request, allCards, remCards)

            setRequest(newRequest)
            setRemCards(newRemCards)
            setCanUndo(false)
            CompleteControl()
        } else {
            alert("No Remaining Card Left")
        }
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
            }
        } else {
            setPrevCards({
                ...prevCards,
                removeIndex: index
            })
            secondClick(item, highlighted, allCards, index) && setCanUndo(true)

            // reset variables for new processes, check if any completed decks
            setActive(false)
            setHighlighted({})
            CompleteControl()
        }
    }

    const CompleteControl = () => {
        const { complete: newComplete  } = checkComplete(allCards, complete)
        newComplete !== complete && setCanUndo(false)
        setComplete(newComplete) // increase completed card value 
    }
    
    return (
        // wrap cards with column and inside the columns add new cards to get 4 * 6, 6 * 5 card matrix
        complete < 2 ?
        <div>

            <TopNav clickUndo={clickUndo} clickHint={clickHint} clickRemCards={clickRemCards} complete={complete} />

            <div 
            className="cards">
                { allCards.map((card, index) => (
                        <div className="cards-col"> 
                            { cardsPush(card, index, clickCard) }
                        </div>
                    ))
                }
            </div>

            <InfoBox request={request} complete={complete}/>
        
        </div> : <FinishPage />
    )
}

export default Game