
class Link {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function createLink(item){
    let node, temp;
    for (let i = item.length - 1; i >= 0; i--) {
        if(!node)
            node = new Link(item[i]);
        else {
            temp = new Link(item[i]);
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

//console.log(linkedlist)
return linkedlist
   
}

export default LinkedList