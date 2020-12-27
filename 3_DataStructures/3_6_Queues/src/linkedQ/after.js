class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    
    isEmpty() {
        if (this.front === null) {
            return true;
        } else {
            return false;
        }
    }

    put(value) {
        if (this.front === null) {
            this.front = new Node(value, null, null);
            this.rear = this.front;
        } else {
            this.rear = new Node(value, this.rear, null);
            this.rear.prev.next = this.rear;
        }
    }

    get() {
        let value = undefined;
        if (this.front === null) {
            return undefined;
        } else if (this.front === this.rear) {
            value = this.front.value;
            this.front = null;
            this.rear = null;
        } else {
            value = this.front.value;
            this.front = this.front.next;
            this.front.prev = null;
        }
        return value;
    }


    print() {
        let curr = this.front;

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
}


queue = new LinkedQueue();
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();