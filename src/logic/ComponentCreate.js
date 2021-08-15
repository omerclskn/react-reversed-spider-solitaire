import BlankCard from '../components/Card/BlankCard'
import Card from '../components/Card/Card'
import BlankColumnCard from '../components/Card/BlankColumnCard'

export const blankWrap = (complete) => {
    let blanks = []

    for (let index = 0; index < 8; index++) {
        blanks.push( 
        <BlankCard complete={complete} index={index} />
        )
    }
    return blanks
}

export const cardsPush = (card, index, clickCard) => {
        let pushed =[]
        if (card === null) {
            pushed.push(
                <BlankColumnCard clickCard={clickCard} card={card} index={index} />
            )
        }

        let marginValue = 0 // for placing cards
        while (card !== null) {

        // pushed array contains each card 
        pushed.push(
            <Card marginValue={marginValue} clickCard={clickCard} index={index} card={card} />
        )
        card = card.next
        marginValue += 1
    }
    return pushed
}