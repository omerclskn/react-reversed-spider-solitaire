import React from 'react'
import CardTypeFinder from './CardTypeFinder'
import useWindowDimensions from '../useWindowDimensions'

const Card = ({marginValue, clickCard, index, card}) => {

    const { height, width:width2 } = useWindowDimensions();

    const id = card.val.value + " " + card.val.deck// calculate each cards spesific id
    const cardType = CardTypeFinder(card) // get correct image for card's value
    const isActive = card.val.active
    const isShow = card.val.show

    return (
        <div
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
