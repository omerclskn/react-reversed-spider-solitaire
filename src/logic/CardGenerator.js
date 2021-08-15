import linkedlist from './linkedlist'

export class card {
    constructor(deck, value, show, active){
        this.deck = deck;
        this.value = value;
        this.show = show;
        this.active = active
    }
}

export const generateCards = () => {
    const cardRank = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

    let cards = []
    for (let index = 0; index < 8; index++) {
        cardRank.forEach((item) => {
            cards.push(new card(index, item, false, false))
        })
    }
    return cards
}

export const shuffleArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];
    }
    return array
}

export const splitArray = (cards) => {
    let card_split = []
    let temp = 0
    for (let index = 0; index < 10; index++) {
        if (index < 4) {
            card_split = [...card_split, [...cards.slice((index * 6) + 0, (index * 6) + 6)]]
        } else {
            card_split = [...card_split, [...cards.slice((index * 6) + 0 - temp, (index * 6) + 5 - temp)]]
            temp += 1
        }
    }
    return card_split
}

export const getRemainingCards = (array) => {
    return array.filter((item, index) => (index >= 54))
}

export const DisplayLastCards = (card_initial) => {
    for (let index = 0; index < 10; index++) {
        let element = card_initial[index]
        while (element.next !== null) {
            element = element.next
        }
        element.val.show = true;
    }
}

const CardGenerator = () => {

// generate 8 deck of cards
let cards = generateCards()

// shuffle array
cards = shuffleArray(cards)

// split array by index then card_split will be 10 array of arrays
let card_split = splitArray(cards)

// then transform array to linked list 
card_split = linkedlist(card_split)

// split decks to initial and remaining, initials: 6 6 6 6 5 5 5 5 5 5, rems: 50, rems will be in card holder, initials will display on board
const card_initial = card_split
const card_rem = getRemainingCards(cards)

// last cards will display their value, others will close
DisplayLastCards(card_initial)

return {card_initial, card_rem}
}

export default CardGenerator