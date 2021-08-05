
const CardGenerator = () => {
   const cardRank = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

let cards = []
// generate 8 deck of cards
for (let index = 0; index < 8; index++) {
    cardRank.forEach((item) => {
    cards.push(item)
    })
}
// shuffle array
cards = cards.sort(() => Math.random() - 0.5)

// split array by index then card_split will be 10 array of arrays
let card_split = []
for (let index = 0; index < 10.4; index++) {
    if(index === 5){
        card_split = [...card_split, [...cards.slice((index*10)+0, (index*10)+4)]]
        // this substraction control important because of first 4 decks have 6 cards when initialize
        index = index - 0.6
    }
    else {card_split = [...card_split, [...cards.slice((index*10)+0, (index*10)+10)]]}
}

// split decks to initial and remaining, initials: 10 10 10 10 10 4, rems: 10 10 10 10 10, rems will be in card holder, initials will display on board
const card_initial = card_split.filter((item, index) => (index < 6))
const card_rem = card_split.filter((item, index) => (index >= 6))

return {card_initial, card_rem}
}

export default CardGenerator