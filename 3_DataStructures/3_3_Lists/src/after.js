class ArrayList {
    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Int32Array(capacity);
        this.length = 0;
    }
    
    isEmpty() {
        return this.length === 0 ? true : false;
    }

    prepend(value) {
        this.insert(0, value);
    }

    append(value) {
        this.insert(this.length, value);
    }

    setHead(index) {
        if (index < this.length) {
            this.array = this.array.slice(index)
            this.capacity -= index;
            this.length -= index;
        }
    }

    access(index) {
        if (index >= this.length) {
            return undefined;
        }
        return this.array[index];
    }

    insert(index, value) {
        if (this.length === this.capacity) {
            this.capacity *= 2;
            const newArray = new Int32Array(this.capacity);
            for (let i = 0; i < index; i++) {
                newArray[i] = this.array[i];
            }
            for (let i = index; i < this.length; i++) {
                newArray[i + 1] = this.array[i];
            }
            this.array = newArray;
        } else {
            for (let i = this.length - 1; i >= index; i--) {
                this.array[i + 1] = this.array[i];
            }
        }
        this.array[index] = value;
        this.length++;
    }

    remove(index) {
        if (index >= this.length) {
            return false;
        }

        for (let i = index + 1; i < this.length; i++) {
            this.array[i - 1] = this.array[i];
        }
        this.length--;
        return true;
    }

    print() {
        let s = '';
        for (let i = 0; i < this.length; i++) {
            s += this.array[i] + ' ';
        }
        console.log(s);
    }
}



myList = new ArrayList(8);
myList.print();

for (let i = 0; i < 10; i++) {
    myList.append(i + 1);
}
myList.print();

for (let i = 0; i < 10; i++) {
    myList.prepend(i + 1);    
}
myList.print();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();

myList.remove(4);
myList.print();

myList.setHead(10);
myList.print();
