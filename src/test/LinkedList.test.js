import LinkedList from "../logic/linkedlist";
import {
    DataGenerator
} from '../JunkData'

describe("Linked List Control", () => {
    it("should return linked list version of array", () => {
        let array = DataGenerator().arrayOfCards
        let toLinkList = LinkedList([array])

        expect(toLinkList).toEqual([DataGenerator().linked_data1])
    })
})