import '../assets/css/card.css'

export const blankWrap = (complete) => {
    let blanks = []

    for (let index = 0; index < 8; index++) {
        blanks.push( <div className = "blank"
            style = {
                {
                    ...(complete > index ? { // if card's show property true, display the card 
                        background: (`var(--as)`),
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    } : "")
                }
            } >
            </div>
        )
    }
    return blanks
}

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
    // remove highlighted card or cards
    while (remove !== null) {
        remove.val.active = false
        remove = remove.next
    }
}

export const removeSelected = (remove, allCards) => {
    // remove selected item selected means after placement need to remove card from it's old position
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
    for (let index = 0; index < 10; index++) {
        let element = allCards[index]
        while (element !== null && element.next !== null) {
            element = element.next
        }
        if (element !== null) {
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

export const checkComplete = (allCards, complete) => {
    // traverse in every card and if rank reaches 13 means sorting complete
    for (let index = 0; index < allCards.length; index++) {
        let element = allCards[index];
        let rank = 1
        while (element !== null && element.next !== null) {
            if (element.val.show === true) {
                if ((+element.next.val.value + 1) === +element.val.value) {
                    if (rank === 1) {
                        var node = element // hold head node bcs if sorting complete, we will need to remove from that index
                    }
                    rank += 1
                    if (rank === 13) {
                        complete += 1
                        removeSelected(node, allCards)
                        alert("You Have Completed a Deck")
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

            let next_value = +item.next.val.value + 1;
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
    if (item === null && +highlighted.val.value === 13) {
        removeSelected(highlighted, allCards)
        allCards[index] = highlighted
    } else if (+item?.val.value === +highlighted.val.value + 1) { // check clicked item is correct for placing highlighted
        removeSelected(highlighted, allCards) // remove card from old place

        // add selected card to clicked card's next
        item.next = highlighted
    } else {
        // if not correct feedback to user and remove highlight
        item === null ? alert("Only King's can be placed to blank columns") : (item === highlighted || alert("Incorrect Placement"))
    }
    removeHighlight(highlighted)
    setCardDisplay(allCards)
}