import React, {useState, useReducer} from 'react'
import '../assets/css/card.css'
import Card from './Card'
import { useDrop } from 'react-dnd'
import CardTypeFinder from './CardTypeFinder'

const CardCol = ({card_col}) => {

    //let board = card_col
    const [ allCards, setAllCards ] = useState(card_col)
    const [ remove, setRemove ] = useState({})
    const [ active, setActive ] = useState(false)

    const [_, forceUpdate] = useReducer((x) => x + 1, 0)

    const getSelected = (allCards) => {
        for (let index = 0; index < allCards.length; index++) {
            let element = allCards[index];
            while (element !== null) {
                if (element.val.active === true) {
                    setRemove(element)
                    return element
                }
                element = element.next
            }
        }
        return false
    }

    const checkSelected = () => {
        let anySelected = getSelected(allCards)
        console.log(anySelected)

        if(!anySelected) return false
        return anySelected
    }

    const removeSelected = (remove) => {
     for (let index = 0; index < allCards.length; index++) {
            let element = allCards[index];
            let prev
            while (element !== null) {
                if (element === remove) {
                    prev.next = null
                    return true
                }
                prev = element
                element = element.next
            }
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

        for (let index = 0; index <= iter; index++) {
            head.val.active = true
            head = head.next
        }
        setActive(true)
        } else{
            let nextValue = checkSelected()
            removeSelected(nextValue)
            if (+item.val.value === +nextValue.val.value + 1) {
                item.next = nextValue
                item.next.val.active = false
            }
            forceUpdate()
            setActive(false)
            setRemove({})
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

    const cardsPush = (board) => {
        let pushed =[]
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
            //marginTop:((6-index)*20), 
            //zIndex:6-index, 
            ...({background: (`var(${cardType})`), 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'}), }}  >
        </div>
        
        )
        board = board.next
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
                            cardsPush(board)
                        }
                    </div>
                ))

            }
        </div>
    )
}

export default CardCol
