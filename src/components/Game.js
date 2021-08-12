import React, { useState } from 'react'
import '../assets/css/card.css'
import CardTypeFinder from './CardTypeFinder'
import CardGenerator from '../CardGenerator'
import FinishPage from './FinishPage'
import InfoBox from './InfoBox'
import { blankWrap, removeHighlight, removeSelected, setCardDisplay, clickGetCards, checkComplete } from './Gameplay'

const Game = () => {

    const {
        card_initial,
        card_rem
    } = CardGenerator()

    const [allCards, setAllCards] = useState(card_initial) // contains all cards 
    const [ highlighted, setHighlighted ] = useState({}) // keeps highlighted card, set when every first click to card
    const [ active, setActive ] = useState(false) // active means we have highlighted card so if any click triggered need to control for placement
    const [ request, setRequest ] = useState(0) // request keeps how many deck of cards will come from remaining cards
    const [ remCards, setRemCards ] = useState(card_rem) // remaining cards
    const [ complete, setComplete ] = useState(0) // complete keeps how many decks will completed

    //const [_, forceUpdate] = useReducer((x) => x + 1, 0)

    const clickEvent = () => {
        if (request < 5) {
            const {
                request: newRequest,
                allCards: newAllCards,
                remCards: newRemCards
            } = clickGetCards(request, allCards, remCards)

            setRequest(newRequest)
            setRemCards(newRemCards)
            setCardDisplay(newAllCards)
        } else {
            alert("No Remaining Card Left")
        }
    }

    const CompleteControl = () => {
        const { allCards: newAllCards, complete: newComplete  } = checkComplete(allCards, complete)
        
        setComplete(newComplete) // increase completed card value 
        setCardDisplay(newAllCards)
    }
    
    const handleClick = (item, index) => (e) => {
        /* control the active variable, if active is true it means this is second click so need to check replacing
        but if false this means need to highlight or reject request */
        if(!active) {
            if (item !== null) {
                let iter = 0; // how many cards will be select
                let head = item; // need to hold head node because after control item's next, clicked item will be lost

                while (item.next !== null) {

                    let next_value = +item.next.val.value + 1;
                    let cur_value = +item.val.value;
                    // check cards if in correct order
                    if (next_value !== cur_value || item.val.show === false) {
                        return false
                    }

                    item = item.next
                    iter += 1
                }
                setHighlighted(head) // highlight selected card
                // if every item under clicked item have correct sort, activate all
                for (let index = 0; index <= iter; index++) {
                    head.val.active = true
                    head = head.next
                }
                setActive(true) // we have activated item   
            }
        } else{

            if (item === null && +highlighted.val.value === 13) {
                item = highlighted
                removeSelected(highlighted, allCards)
                allCards[index] = item
                removeHighlight(item)
           }
            else if (+item?.val.value === +highlighted.val.value + 1) { // check clicked item is correct for placing highlighted
            removeSelected(highlighted, allCards) // remove card from old place
            
            // remove card's activation
            item.next = highlighted

            while (item !== null) {
                item.val.active = false
                item = item.next
                }
            }
            else{
                // if not correct feedback to user and remove highlight
                item === null ? alert("Only King's can be placed to blank columns") : ( item === highlighted || alert("Incorrect Placement"))
                removeHighlight(highlighted)
            }
            // reset variables for new processes, check if any completed decks, set card's display based on new indexes
            setActive(false) 
            setHighlighted({})
            CompleteControl()
            setCardDisplay(allCards)
        }
    }

    const cardsPush = (card, index) => {
        let pushed =[]
        let marginValue = 0 // for placing cards
        if (card === null) {
            pushed.push(
                <div
                id = {0}
                className={"blank"}
                onClick = {
                        handleClick(card, index)
                    } >
                    </div>
            )
        }

        while (card !== null) {
        let id = card.val.value + " " + card.val.deck// calculate each cards spesific id
        const cardType = CardTypeFinder(card) // get correct image for card's value

        // pushed array contains each card div
        pushed.push(
            
            <div
            id={id}
            className = {
                "card " + (card.val.active ? 'selectedCard' : '') // if card's active property true, highlight to card
            }
            onClick = {
                handleClick(card)
            }
            style={{ 
            marginTop:(marginValue*25), 
            ...( card.val.show ? { // if card's show property true, display the card 
                    background: (`var(${cardType})`),
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'} : ""), }}  >
        </div>
        
        )
        card = card.next
        marginValue += 1
    }
    return pushed
    }
    
    return (
        // wrap cards with column and inside the columns add new cards to get 4 * 6, 6 * 5 card matrix
        complete < 8 ?
        <div>
            <div className="top-nav">
                <div className = "card cardholder"
                onClick = {
                        clickEvent
                    } >

                    </div>
                    <div className="blank-wrap">
                        {blankWrap(complete)}
                    </div>
            </div>
        <div 
        className="cards">
            {
                allCards.map((card, index) => (
                    <div className="cards-col"> 
                        {
                            cardsPush(card, index)
                        }
                    </div>
                ))

            }
            
        </div>
        <InfoBox request={request} complete={complete}/>
            </div> : <FinishPage />
    )
}

export default Game
