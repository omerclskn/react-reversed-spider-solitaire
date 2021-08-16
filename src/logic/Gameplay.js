import '../assets/css/card.css'
import { card } from './CardGenerator'
import applauseAudio from '../assets/sound/applause.mp3'
import wrongAudio from '../assets/sound/wrong.mp3'

export const createLinked = (element) => {
    // remaining cards is array of objects but we need to transform every object to linked list object
    class Link {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }
    return new Link(element)
}

export const removeHighlight = (remove) => {
    // remove card or cards activation/selected/red bordered
    while (remove !== null) {
        remove.val.active = false
        remove = remove.next
    }
}

export const removeCardOldPlace = (remove, allCards) => {
    // remove card from it's old place
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];
        let prev
        while (element !== null) {

            if (element === remove) {
                prev === undefined ? allCards[index] = null : prev.next = null // control for if column will not have any cards after placement
            }
            prev = element
            element = element.next
        }
    }
}

export const setCardDisplay = (allCards) => {
    // traverse every card and set displayness to true if it's first element 
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index]
        if (element !== null) {
            while (element.next !== null) {
                element = element.next
            }
            element.val.show = true;
        }   
    }
}

export const clickGetCards = (request, allCards, remCards) => {
    // check request bcs only 5 * 10 cards will distribute
        request += 1
        // add new cards to placing cards
        for (let index = 0; index < allCards.length; index++) {
            let element = allCards[index];
            if (element === null) { // placing to empty columns
                element = createLinked(remCards.shift())
                allCards[index] = element
            } else {
                while (element.next !== null) {
                    element = element.next
                }
                element.next = createLinked(remCards.shift())
            }
        }
        setCardDisplay(allCards)
        return {request, remCards}
    
}

export const checkComplete = (allCards, complete, test) => {
    // traverse in every card and if rank reaches 13 means sorting complete
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];
        let rank = 1
        while (element !== null && element.next !== null) {
            if (element.val.show === true) {
                let next_value = +element.next.val.value - 1;
                let cur_value = +element.val.value;
                if (next_value === cur_value) {
                    if (rank === 1) {
                        var node = element // hold head node bcs if sorting complete, we will need to remove from that index
                    }
                    rank += 1
                    if (rank === 4) {                        
                        test && new Audio(applauseAudio).play()
                        complete += 1
                        removeCardOldPlace(node, allCards)
                        test && alert("You Have Completed a Deck")
                    }
                } else rank = 1 // reset rank value for new deck
            }
            element = element.next
        }
    }
    setCardDisplay(allCards)
    return {node, complete}
}

export const firstClick = (item) => {
    if (item !== null) {
        let iter = 0; // how many cards will be select
        let head = item; // need to hold head node because after control item's next, clicked item will be lost

        while (item.next !== null) {

            let next_value = +item.next.val.value - 1;
            let cur_value = +item.val.value;
            // check cards if in correct order
            if (next_value !== cur_value || item.val.show === false) {
                return false
            }

            item = item.next
            iter += 1
        }
        let node = head

        // if every item under clicked item have correct sort, activate all
        for (let index = 0; index <= iter; index++) {
            head.val.active = true
            head = head.next
        } 
        return node
    }   
}

export const secondClick = (item, highlighted, allCards, index) => {
    let undoControl = false
    if (item === null && +highlighted.val.value === 1) {
        removeCardOldPlace(highlighted, allCards)
        allCards[index] = highlighted
        
    } else if (+item?.val.value === +highlighted.val.value - 1) { // check clicked item is correct for placing highlighted
        removeCardOldPlace(highlighted, allCards) // remove card from old place

        // add selected card to clicked card's next
        item.next = highlighted
        undoControl = true
        
    } else {
        // if not correct feedback to user and remove highlight
        if(item === null) {
            alert("Only A can be placed to blank columns")
        } 
        else {
            if(item !== highlighted){
                new Audio(wrongAudio).play()
                alert("Incorrect Placement") 
            }
        }
    }
    removeHighlight(highlighted)
    setCardDisplay(allCards)
    return undoControl
}

export const getPrev = (allCards, find) => {
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];

        if (element === null) {
            return true
        }

        while (element.next!==null) {
            if (element.next === find) {
                 return element.val.show
            }
            element = element.next
        }
    }
}

export const undoPlacement = (allCards, prevCards) => {
    // Find prevCards' old position by it's old index
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];
        if (prevCards.index === index) {
            // when find check it is blank place or not
            if (element === null) {
                // if blank place directly
                allCards[index] = prevCards.newHead
            } else{
                // if not need to place to last element
                while (element.next !== null) {
                    element = element.next
                }
                element.val.show = prevCards.status
                element.next = prevCards.newHead
            }
        }
    }
}

export const getHint = (allCards, highlighted) => {

    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];
        while (element !== null) {
            let next_value = +highlighted.val.value - 1;
            let cur_value = +element.val.value;
            if ((cur_value) === (next_value) && element.val.show === true && element.next === null) {
                removeCardOldPlace(highlighted, allCards)
                element.next = highlighted
                removeHighlight(highlighted)
                setCardDisplay(allCards)

                return true
            }
            element = element.next
        }
    }
    return false
}

export const undoPlacementDist = (allCards) => {
    let prevRemCards = []
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];

        while (element.next!==null) {
            element = element.next
        }
        
        prevRemCards.push(new card(element.val.deck, element.val.value, false, false))
        removeCardOldPlace(element, allCards)
    }
    console.log(prevRemCards)
    return prevRemCards
}