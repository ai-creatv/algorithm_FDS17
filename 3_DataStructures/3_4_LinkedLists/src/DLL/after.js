class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    isEmpty() {
        return this.head === null;
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value, null, null);
            this.tail = this.head;
        } else {
            const node = new Node(value, this.head, null);
            this.head.prev = node;
            this.head = node;
        }
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value, null, null);
            this.tail = this.head;
        } else {
            const node = new Node(value, null, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
    }

    setHead(index) {
        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next;
            if (curr === null) {
                return false;
            }
        }
        curr.prev = null;
        this.head = curr;
        return true;
    }

    access(index) {
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
            if (curr === null) {
                return undefined;
            }
        }
        return curr.value;
    }

    insert(index, value) {
        if (this.head === null && index > 0) {
            return false;
        }

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        let curr = this.head
        for (let i = 0; i < index; i++) {
            if (curr === null) {
                return false;
            }
            curr = curr.next;
        }

        if (curr === null) {
            this.append(value);
            return true;
        }

        const node = new Node(value, curr, curr.prev);
        curr.prev.next = node;
        curr.prev = node;
        curr = node;
        return true;
    }

    remove(index) {
        if (this.head === null) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            }
            return true;
        }

        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next;
            if (curr === null) {
                return false;
            }
        }
        curr.prev.next = curr.next;

        if (curr !== this.tail) {
            curr.next.prev = curr.prev;
        } else {
            this.tail = curr.prev;
        }
        return true;
    }

    print() {
        let curr = this.head;

        if (curr === null) {
            console.log('[]');
            return;
        }

        let s = '';
        while(curr !== null) {
            s += `${curr.value} `
            curr = curr.next;
        }
        console.log(`[${s}]`);
    }

    printInv() {
        let curr = this.tail;

        if (curr === null) {
            console.log('[]');
            return;
        }

        let s = '';
        while(curr !== null) {
            s += `${curr.value} `
            curr = curr.prev;
        }
        console.log(`[${s}]`);
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