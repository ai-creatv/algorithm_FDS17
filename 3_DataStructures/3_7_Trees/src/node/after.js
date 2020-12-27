class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(array) {
        const nodeArray = array.map(el => new Node(el));

        for (let i = 0; i < nodeArray.length; i++) {
            const leftInd = i * 2 + 1;
            const rightInd = i * 2 + 2;
            if (leftInd < nodeArray.length) {
                nodeArray[i].left = nodeArray[leftInd];
            }
            if (rightInd < nodeArray.length) {
                nodeArray[i].right = nodeArray[rightInd];
            }
        }

        this.root = nodeArray[0];
    }

    preorder() {
        let s = '';
        
        function recursive(node) {
            s += `${node.value} `;
            if (node.left !== null) {
                recursive(node.left);
            }
            if (node.right !== null) {
                recursive(node.right);
            }
        }
        recursive(this.root);
        console.log(s);
    }

    inorder() {
        let s = '';
        
        function recursive(node) {
            if (node.left !== null) {
                recursive(node.left);
            }
            s += `${node.value} `;
            if (node.right !== null) {
                recursive(node.right);
            }
        }
        recursive(this.root);
        console.log(s);
    }

    postorder() {
        let s = '';
        
        function recursive(node) {
            if (node.left !== null) {
                recursive(node.left);
            }
            if (node.right !== null) {
                recursive(node.right);
            }
            s += `${node.value} `;
        }
        recursive(this.root);
        console.log(s);
    }

    bfs(value) {
        const queue = new Array();

        queue.push(this.root);
        while (queue.length > 0) {
            const node = queue.shift();

            if (node.value === value) {
                return node;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        return null;
    }

    dfs(value) {
        let isFound = false;
        let foundNode = null;
        
        function recursive(node) {
            if (isFound === true) {
                return;
            }

            if (node.value === value) {
                isFound = true;
                foundNode = node;
                return;
            }
            if (node.left !== null) {
                recursive(node.left);
            }
            if (node.right !== null) {
                recursive(node.right);
            }
        }
        recursive(this.root);
        
        return foundNode;
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