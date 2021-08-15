
class Link {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// building linked list structure, cards will have next and val keys val contains card property, next have next card's property
function createLink(item){
    let node, temp;
    for (let index = item.length - 1; index >= 0; index--) {
        if(!node)
            node = new Link(item[index]);
        else {
            temp = new Link(item[index]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}

const LinkedList = (array) => {

let linkedlist = []

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    linkedlist = [...linkedlist, createLink(element)]
}

return linkedlist
   
}

export default LinkedList