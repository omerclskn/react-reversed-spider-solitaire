
class card {
    constructor(deck, value){
        this.deck = deck;
        this.value = value
    }
}

const CardGenerator = () => {
   const cardRank = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

let cards = []
// generate 8 deck of cards
for (let index = 0; index < 8; index++) {
    cardRank.forEach((item) => {
    cards.push(new card(index, item))
    })
}

console.log(cards)

// shuffle array
cards = cards.sort(() => Math.random() - 0.5)

// split array by index then card_split will be 10 array of arrays
let card_split = []
for (let index = 0; index < 10; index++) {
    if(index < 4){
        card_split = [...card_split, [...cards.slice((index*6)+0, (index*6)+6)]]
    }
    else {
        card_split = [...card_split, [...cards.slice((index*6)+0, (index*6)+5)]]
    }
}

// control
for (let index = 0; index < 10; index++) {
    for (let index2 = 0; index2 <= 6; index2++) {
        if(index < 4){
            if(cards[(index*6)+index2] === card_split[index][index2])
                console.log('true')
        }
        else{
            if(index2 < 5){
                if(cards[(index*6)+index2] === card_split[index][index2])
                    console.log('true')
            }
        }
    }
}

// split decks to initial and remaining, initials: 10 10 10 10 10 4, rems: 10 10 10 10 10, rems will be in card holder, initials will display on board
const card_initial = card_split
const card_rem = cards.filter((item, index) => (index >= 54))

return {card_initial, card_rem}
}

export default CardGenerator