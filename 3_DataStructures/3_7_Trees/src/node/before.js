class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
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

    }

    inorder() {

    }

    postorder() {

    }

    bfs(value) {

        return false;
    }

    dfs(value) {

        return false;
    }
}