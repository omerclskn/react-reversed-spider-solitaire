import { List, Item } from 'linked-list'

function L(val){
    this.val = val;
    this.next = null;
}

function createL(a){
    let node, temp;
    for(let i=a.length-1; i >= 0; i--){
        if(!node)
            node = new L(a[i]);
        else {
            temp = new L(a[i]);
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
    linkedlist = [...linkedlist, createL(element)]
}

//console.log(linkedlist)
return linkedlist
   
}

export default LinkedList