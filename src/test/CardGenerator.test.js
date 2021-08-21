import {
    shuffleArray,
    splitArray,
    getRemainingCards,
    generateCards,
    DisplayLastCards
} from "../logic/CardGenerator";
import LinkedList from "../logic/linkedlist";

describe("Card Generator Shuffle Test", () => {
    it("should shuffle the array", () => {
        const array = [1, 2, 3, 4, 5]
        const shuffled = shuffleArray([1, 2, 3, 4, 5])

        const equality = (shuffled === array)

        expect(!equality).toBeTruthy()
    })
})

describe("Card Generator Remaining Cards Test", () => {
    it("should remCards length is 50", () => {
        const array = generateCards()
        const remArray = getRemainingCards(array)

        expect(remArray.length).toEqual(50)
    })
})

describe("Card Generator Split Test", () => {
    it("should split the array", () => {
        let control = 0

        let cards = generateCards()
        let card_split = splitArray(cards)

        let temp = 0
        for (let index = 0; index < 10; index++) {
            for (let index2 = 0; index2 < 6; index2++) {
                if (index < 4) {
                    if (cards[(index * 6) + index2] === card_split[index][index2]) {
                        control += 1
                    }
                } else {
                    if (index2 < 5) {
                        if (cards[(index * 6) + index2 - temp] === card_split[index][index2]) {
                            control += 1
                        }
                    } else temp += 1
                }
            }
        }
        // if every item equal control variable should be 54 
        expect(control).toEqual(54)
    })
})

describe("Card Show Test", () => {
    it("should last card's show is true", () => {
        let truthy = true
        let cards = generateCards()
        cards = splitArray(cards)
        cards = LinkedList(cards)

        DisplayLastCards(cards)
        // check every last item's visibility
        for (let index = 0; index < 10; index++) {
            let element = cards[index]
            while (element.next !== null) {
                element = element.next
            }
            if (element.val.show === false) {
                truthy = false
                break
            }
        }

        expect(truthy).toBeTruthy()
    })
})

