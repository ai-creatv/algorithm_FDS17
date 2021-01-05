class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    isEmpty() {

    }

    prepend(value) {

    }

    append(value) {

    }

    setHead(index) {

    }

    access(index) {

    }

    insert(index, value) {

    }

    remove(index) {

    }

    print() {
        
    }

    printInv() {

    }
}


myList = new DoublyLinkedList();
myList.print();
myList.printInv();

for (let i = 0; i < 10; i++) {
    myList.append(i + 1);
}
myList.print();
myList.printInv();

for (let i = 0; i < 10; i++) {
    myList.prepend(i + 1);    
}
myList.print();
myList.printInv();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();
myList.printInv();

myList.remove(4);
myList.print();
myList.printInv();

myList.setHead(10);
myList.print();
myList.printInv();