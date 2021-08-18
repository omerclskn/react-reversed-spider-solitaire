import React, {useState, useReducer} from 'react'
import CardTypeFinder from './CardTypeFinder'
import useWindowDimensions from '../useWindowDimensions'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { firstClick ,secondClick } from '../../logic/Gameplay';

const Card = ({marginValue, clickCard, index, card}) => {

    const isDraggable = (card) => {
        while (card.next !== null) {

            let next_value = +card.next.val.value - 1;
            let cur_value = +card.val.value;
            // check cards if in correct order
            if (next_value !== cur_value || card.val.show === false) {
                return false
            }

            card = card.next
        }
        return true
    }

    const { width:width2 } = useWindowDimensions();

    const id = card.val.value + " " + card.val.deck// calculate each cards spesific id
    const cardType = CardTypeFinder(card) // get correct image for card's value
    const isActive = card.val.active
    const isShow = card.val.show

    return (
        <div
            draggable={ isDraggable(card) }
            onDragStart={ clickCard(card,index) }
            onDrop={ clickCard(card,index) }
            onDragOver={ (e) => e.preventDefault() }
            id={id}
            className = {
                "card " + (isActive ? 'selectedCard' : '') // if card's active property true, highlight to card
            }
            onClick = { clickCard(card, index) }
            style={{
            marginTop: (marginValue * (width2 < 910 ? 15 : 25)),
                ...(isShow ? { // if card's show property true, display the card
                    background: (`var(${cardType})`),
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'} : ""),
                    ...( width2 < 1150 ? {height: width2 > 910 ? 90 : 50,
                                        width: width2 > 910 ? 65 : 36} : "") }}  >
        </div>
    )
}

export default Card
