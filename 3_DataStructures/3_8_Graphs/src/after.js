class Vertex {
    constructor(value, adjList=new Array()) {
        this.value = value;
        this.adjList = adjList;
    }
}

class Graph {
    constructor() {
        this.vertices = new Array();
    }

    insert(value, adjList) {
        const vertex = new Vertex(value, adjList);
        const newInd = this.vertices.length;
        
        adjList.forEach(index => {
            this.vertices[index].adjList.push(newInd);
        });

        this.vertices.push(vertex);
    }

    bfs(vertexInd, value) {
        const visited = new Uint8Array(this.vertices.length);
        const queue = new Array();
        queue.push(vertexInd);

        while (queue.length !== 0) {
            const vertInd = queue.shift();

            if (visited[vertInd] === 0) {
                if (this.vertices[vertInd].value === value) {
                    return this.vertices[vertInd];
                }
                visited[vertInd] = 1;

                this.vertices[vertInd].adjList.forEach(index => {
                    queue.push(index);
                });
            }
        }

        return undefined;
    }

    dfs(vertexInd, value) {
        const visited = new Uint8Array(this.vertices.length);
        const vertices = this.vertices;
        let isFound = false;
        let foundNode = undefined;

        function recursive(vertInd) {
            if (visited[vertInd] === 1 || isFound === true) {
                return;
            }

            if (this.vertices[vertInd].value === value) {
                foundNode =  this.vertices[vertInd];
                isFound = true;
            }
            visited[vertInd] = 1;

            vertices[vertInd].adjList.forEach(index => {
                recursive(index);
            });
        }

        recursive(vertexInd);

        return foundNode;
    }
}

const graph = new Graph();
graph.insert(0, []);
graph.insert(1, [0]);
graph.insert(2, [1]);
graph.insert(3, [2]);
graph.insert(4, [0, 2, 3]);

console.log(graph.bfs(0));
console.log(graph.dfs(0));
