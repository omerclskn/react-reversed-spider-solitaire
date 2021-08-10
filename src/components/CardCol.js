import React, {useState, useReducer} from 'react'
import '../assets/css/card.css'
import Card from './Card'
import { useDrop } from 'react-dnd'
import CardTypeFinder from './CardTypeFinder'

const CardCol = ({card_col}) => {

    //let board = card_col
    const [ allCards, setAllCards ] = useState(card_col)
    const [ highlighted, setHighlighted ] = useState({})
    const [ active, setActive ] = useState(false)
    //const [_, forceUpdate] = useReducer((x) => x + 1, 0)

    const removeSelected = (remove) => {
        console.log(allCards)
     for (let index = 0; index < allCards.length; index++) {
            let element = allCards[index];
            let prev
            while (element !== null) {
                if (element === remove) {
                    prev.next = null
                }
                prev = element
                element = element.next
            }
        }   
        console.log(allCards)
    }

    const removeHighlight = (remove) => {
     for (let index = 0; index < allCards.length; index++) {
            let element = allCards[index];
            while (element !== null) {
                if (element === remove) {
                    element.val.active = false
                    remove = remove.next
                }
                element = element.next
            }
        }   
    }

    const setCards = (item, next) => {
        for (let index = 0; index < allCards.length; index++) {
            let element = allCards[index];
            while (element !== null) {
                let prev
                if (element === item) {
                    console.log("set")
                    element.next = next
                }
                if (element === next) {
                    prev = null
                }
                prev = element
                element = element.next
            }
        } 
    }

    const setCardDisplay = () => {
    
    for (let index = 0; index < 10; index++) {
        let element = allCards[index]

        while(element.next !== null) {
            element = element.next
        }

    element.val.show = true;
        }
    }
    
    const handleClick = (item) => (e) => {

        if (!active) {
        
        console.log(item)
        let iter = 0;
        let head = item;
        console.log("girdi")
        
        while(item.next !== null){
            
            let next_value = +item.next.val.value + 1;
            let cur_value = +item.val.value;

            if(next_value !== cur_value ) {
                return false
            }

            item = item.next
            iter += 1
        }
        setHighlighted(head)
        for (let index = 0; index <= iter; index++) {
            head.val.active = true
            head = head.next
        }
        setActive(true)
        } else{
            let nextValue = highlighted
            console.log("remove", highlighted)
            console.log(nextValue)
            console.log(item)

            if (+item.val.value === +nextValue.val.value + 1) {
            removeSelected(highlighted)
            setCards(item, nextValue)
            
            while (item !== null) {
                console.log(item)
                item.val.active = false
                item = item.next
            }
            }
            else{
               removeHighlight(nextValue)
            }
            
            setActive(false)
            setHighlighted({})
            setCardDisplay()
        }
    }

    //const [board, setBoard] = useState(card_col)
    /*
    const setDrop = (id) => {
        console.log(id)
        const dropped = board.filter((card) => id === (card.value + " " + card.deck))
        setBoard([...board, dropped])
    }*/

    //console.log(card_col)
    /*
    const [{isOver}, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item) => setDrop(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));*/

    const cardsPush = (board, index) => {
        let pushed =[]
        let marginValue = 0
        while(board !== null){
        let id = board.val.value + " " + board.val.deck
        const cardType = CardTypeFinder(board)
        pushed.push(
            //<Card item={board} id={id} key={id} onClick={handleClick(board)} />
            
            <div 
            //ref={drag}
            id={id}
            className={"card " + (board.val.active ? 'selectedCard' : '') } 
            onClick={handleClick(board)}
            style={{ 
            marginTop:(marginValue*20), 
            ...( board.val.show ? {background: (`var(${cardType})`), 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'} : ""), }}  >
        </div>
        
        )
        board = board.next
        marginValue += 1
    }
    return pushed
    }
    
    return (
        // wrap cards with row and inside the rows add new cards to get 10 * 6 card matrix
        <div 
        className="cards">
            {
                card_col.map((board, index) => (
                    <div className="cards-col"> 
                        {
                            cardsPush(board, index)
                        }
                    </div>
                ))

            }
        </div>
    )
}

export default CardCol
