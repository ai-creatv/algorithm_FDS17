class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.isFull = false;
        this.array = new Array(capacity);
    }

    put(value) {
        if (this.isFull === false) {
            this.array[this.rear++] = value;
            this.rear %= this.capacity;
            if (this.rear === this.front) {
                this.isFull = true;
            }
            return true;
        } else {
            return false;
        }
    }

    get() {
        if (this.front !== this.rear || this.isFull === true) {
            const value = this.array[this.front++];
            this.front %= this.capacity;
            this.isFull = false;
            return value;
        } else {
            return undefined;
        }
    }

    peek() {
        if (this.front !== this.rear || this.isFull === true) {
            return this.array[this.front];
        } else {
            return undefined;
        }
    }

    print() {
        let s = '';
        let endIdx = this.rear;

        if (this.rear === this.front && this.isFull === false) {
            console.log('[]');
            return;
        }

        if (this.rear <= this.front) {
            endIdx += this.capacity;
        }
        for (let i = this.front; i < endIdx; i++) {
            s += `${this.array[i % this.capacity]} `;
        }
        console.log(`[${s}]`);
    }
}


queue = new CircularQueue(5);
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