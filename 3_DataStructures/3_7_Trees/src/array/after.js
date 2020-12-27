class BinaryTree {
    constructor(array) {
        this.array = array;
    }

    preorder() {
        let s = '';
        const array = this.array;
        
        function recursive(index) {
            if (index >= array.length) {
                return;
            }
            
            s += `${array[index]} `;
            recursive(index * 2 + 1);
            recursive(index * 2 + 2);
        }

        recursive(0);
        console.log(s);
    }

    inorder() {
        let s = '';
        const array = this.array;

        function recursive(index) {
            if (index >= array.length) {
                return;
            }

            recursive(index * 2 + 1);
            s += `${array[index]} `;
            recursive(index * 2 + 2);
        }

        recursive(0);
        console.log(s);
    }

    postorder() {
        let s = '';
        const array = this.array;

        function recursive(index) {
            if (index >= array.length) {
                return;
            }

            recursive(index * 2 + 1);
            recursive(index * 2 + 2);
            s += `${array[index]} `;
        }

        recursive(0);
        console.log(s);
    }

    bfs(value) {
        for (let [idx, el] of this.array.entries()) {
            if (el === value) {
                return idx;
            }
        }
        return false;
    }

    dfs(value) {
        let isFound = false;
        let foundValue = false;
        const array = this.array;
        
        function recursive(index) {
            if (index >= array.length || isFound === true) {
                return;
            }

            if (array[index] === value) {
                isFound = true;
                foundValue = index;
                return;
            }
            
            recursive(index * 2 + 1);
            recursive(index * 2 + 2);
        }

        recursive(0);
        return foundValue;
    }

}

tree = new BinaryTree([0,1,2,3,4,5,6,7,8,9,10,11,12])
tree.preorder()
tree.inorder()
tree.postorder()

console.log(tree.dfs(15))
console.log(tree.dfs(11))

console.log(tree.bfs(6))
console.log(tree.bfs(17))