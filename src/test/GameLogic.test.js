import {
    clickGetCards,
    secondClick,
    checkComplete,
    firstClick,
    removeCardOldPlace,
    getPrev,
    removeHighlight,
    setCardDisplay,
    getCompleteHint,
    undoDistribution,
    getHint,
    anyBlank
}
    from '../logic/Gameplay';
import {DataGenerator} from '../JunkData'

let { highlighted ,linked_data1, linked_data2, linked_data3, linked_data4, remCards, complete_deck } = DataGenerator()

const initializeVariables = () => {
    highlighted = DataGenerator().highlighted
    linked_data1 = DataGenerator().linked_data1
    linked_data2 = DataGenerator().linked_data2
    linked_data3 = DataGenerator().linked_data3
    linked_data4 = DataGenerator().linked_data4
    remCards = DataGenerator().remCards
    complete_deck = DataGenerator().complete_deck
}

describe("Remove Highlight Function", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("Should false active attribute", () => {
        let data = linked_data1
        let truthy = true

        removeHighlight(data)
        // if function work right then all element's active attribute will false
        while (data !== null && truthy === true) {
            if (data.val.active === true) {
                truthy = false
            }
            data = data.next
        }

        expect(truthy).toBeTruthy()
    })
})

describe("Remove selected item", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("should remove element", () => {
        let cards = [ linked_data1, linked_data2, linked_data3 ]
        let willRemove = linked_data3
        // send parameters for remove data from array
        removeCardOldPlace(willRemove, cards)

        expect(cards).toEqual([linked_data1, linked_data2, null])

    })
})

describe("Set Cards Displayness", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("should show every first card", () => {
        let cards = [linked_data1, linked_data2, linked_data3]
        let truthy = true
        setCardDisplay(cards)

        // if function work right every columns last element will display
        for (let index = 0; index < cards.length; index++) {
            let element = cards[index];

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

describe("Distribute New Cards", () => {
    
    beforeEach(() => {
        initializeVariables()
    })

    it("Should add new cards", () => {
        let cards = [linked_data1, linked_data2, linked_data3]
        let request = 0
        let truthy = true

        // if function work right every columns last item equal to remCards 
        clickGetCards(request, cards, remCards)

        for (let index = 0; index < cards.length; index++) {
            let element = cards[index];
            
            while (element.next !== null) {
                element = element.next
            }
            if(element.val.value === remCards[index]){
                truthy = false
                break
            }
        }

        expect(truthy).toBeTruthy()
    })

    it("Should increment request", () => {
        let cards = [linked_data1, linked_data2, linked_data3]
        let request = 0

        // if function work right every columns last item equal to remCards 
        let { request: newRequest } = clickGetCards(request, cards, remCards)

        expect(newRequest).toEqual(request + 1)
    })

    it("Should shift from remCard", () => {
        let cards = [linked_data1, linked_data2, linked_data3]
        let request = 0

        // if function work right every columns last item equal to remCards 
        let {
            remCards: newRemCards
        } = clickGetCards(request, cards, remCards)

        expect(newRemCards).toEqual([])
    })
})

describe("Check Complete", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("Check Completion", () => {
        let complete = 0
        let cards = [complete_deck]
        checkComplete(cards, complete, false)

        expect(cards).toEqual([null])
    })

    it("Check Node", () => {
        let complete = 0
        let cards = [complete_deck]
        let {
            node
        } = checkComplete(cards, complete, false)

        expect(node).toEqual(complete_deck)
    })

    it("Check complete value", () => {
        let complete = 0
        let cards = [complete_deck]
        let {
            complete: newComplete
        } = checkComplete(cards, complete, false)

        expect(newComplete).toEqual(complete + 1)
    })
})

describe("First Click", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("Should return node", () => {
        let node = firstClick(linked_data3.next)
        let truthy = true

        while (node !== null) {
            if (node.val.active === false) {
                truthy = false
                break
            }
            node = node.next
        }

        expect(truthy).toBeTruthy()
    })

    it("Should return false", () => {
        let node = firstClick(linked_data3)
        
        expect(!node).toBeTruthy()
    })

})

describe("getPrev card's visibility", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("should return true bcs prev card's show is true'", () => {
        let show = getPrev([linked_data1, linked_data2, linked_data3], linked_data3.next)

        expect(show).toBeTruthy()
    })

    it("should return false bcs prev card's show is false", () => {
        let show = getPrev([linked_data1, linked_data2, linked_data3], linked_data1.next)

        expect(!show).toBeTruthy()
    })
})

describe("check complete hint", () => {

    beforeEach(() => {
        initializeVariables()
    })

    it("should return true bcs data is eligible for hint", () => {
        let truthy = getCompleteHint([linked_data2, linked_data3, linked_data4])

        expect(truthy).toBeTruthy()
    })
})

describe('relocate after second click', () => {

    beforeEach(() => {
        initializeVariables()
    })

    it('should relocate a card', () => {
        const truthy = secondClick(linked_data1.next.next, highlighted, [linked_data1, linked_data2], 0)

        expect(truthy).toBeTruthy()
    })
})

describe('undo remaining cards', () => {

    beforeEach(() => {
        initializeVariables()
    })

    it('should undo rem cards', () => {
        const cards = [linked_data1, linked_data2, linked_data3]
        const prevRem = undoDistribution(cards)

        expect(prevRem).toEqual(
            [
                { deck: 4, value: '3', show: false, active: false },
                { deck: 3, value: '7', show: false, active: false },
                { deck: 7, value: '11', show: false, active: false }
            ]
        )
    })
})

describe('selected hint', () => {
    beforeEach(() => {
        initializeVariables()
    })

    it('should relocate selected item with hint', () => {
        let truthy = getHint([linked_data1, linked_data2, linked_data3], highlighted)

        expect(truthy).toBeTruthy()
    })
})

describe('if null column', () => {

    beforeEach(() => {
        initializeVariables()
    })

    it('should return true', () => {
        let truthy = anyBlank([linked_data1, linked_data2, linked_data3])

        expect(truthy).toBeTruthy()
    })
})
