// JavaScript program to print all paths from a source to target

let v;

let adjList;

function Graph(vertices) {
    // initialise vertex count
    v = vertices;

    // initialise adjacency list
    initAdjList();
}

function initAdjList() {
    adjList = new Array(v);

    for (let i = 0; i < v; i++) {
        adjList[i] = [];
    }
}

// add edge from u to v
function addEdge(u, v) {
    // Add v to u's list.
    adjList[u].push(v);
}

// Prints all paths from 'src' to 'dest'
function printAllPaths(src, dest) {
    let isVisited = new Array(v);
    for (let i = 0; i < v; i++)
        isVisited[i] = false;
    let pathList = [];

    pathList.push(src);

    printAllPathsUtil(src, dest, isVisited, pathList);
}

function printAllPathsUtil(u, d, isVisited, localPathList) {
    if (u == (d)) {
        console.log(localPathList);
        // if match found then no need to traverse more till depth
        return;
    }

    // Mark the current node
    isVisited[u] = true;

    // Recur for all the vertices adjacent to current vertex
    for (let i = 0; i < adjList[u].length; i++) {
        if (!isVisited[adjList[u][i]]) {
            // store current node in path[]
            localPathList.push(adjList[u][i]);
            printAllPathsUtil(adjList[u][i], d,
                isVisited, localPathList);

            // remove current node in path[]
            localPathList.splice(localPathList.indexOf(adjList[u][i]), 1);
        }
    }

    // Mark the current node
    isVisited[u] = false;
}

//Create a sample graph

Graph(4);
addEdge(0, 1);
addEdge(0, 3);
addEdge(0, 4);
addEdge(1, 2);
addEdge(1, 3);
addEdge(1, 4);
addEdge(2, 3);
addEdge(3, 4);
let src = 0;
let dest = 4;

console.log("All different paths from " + src + " to " + dest);

printAllPaths(src, dest);