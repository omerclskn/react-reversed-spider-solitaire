import linkedlist from './components/linkedlist'

class card {
    constructor(deck, value, show, active){
        this.deck = deck;
        this.value = value;
        this.show = show;
        this.active = active
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const CardGenerator = () => {
   const cardRank = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

let cards = []
// generate 8 deck of cards
for (let index = 0; index < 8; index++) {
    cardRank.forEach((item) => {
        cards.push(new card(index, item, false, false))
    })
}

//console.log(cards)

// shuffle array

cards = shuffleArray(cards)

// split array by index then card_split will be 10 array of arrays
let card_split = []
let temp = 0
for (let index = 0; index < 10; index++) {
    if(index < 4){
        card_split = [...card_split, [...cards.slice((index*6)+0, (index*6)+6)]]
    }
    else {
        card_split = [...card_split, [...cards.slice((index*6)+0-temp, (index*6)+5-temp)]]
        temp += 1
    }
}

// control
for (let index = 0; index < 10; index++) {
    for (let index2 = 0; index2 <= 6; index2++) {
        if(index < 4){
            if(cards[(index*6)+index2] === card_split[index][index2]){
                console.log('true')
            }
        }
        else{
            if(index2 < 5){
                if(cards[(index*6)+index2] === card_split[index][index2])
                    console.log('true')
            }
        }
    }
}

card_split = linkedlist(card_split)

// split decks to initial and remaining, initials: 6 6 6 6 5 5 5 5 5 5, rems: 50, rems will be in card holder, initials will display on board
const card_initial = card_split
const card_rem = cards.filter((item, index) => (index >= 54))

for (let index = 0; index < 10; index++) {
    let element = card_initial[index]
    while (element.next !== null) {
        element = element.next
    }
    element.val.show = true;
}

return {card_initial, card_rem}
}

export default CardGenerator