// javascript program to check if there is exist a path between
// two vertices of an undirected graph.

var V;

// Pointer to an array containing adjacency lists
var adj;
V = 6;
adj = new Array();
for (var i = 0; i < V; i++)
    adj.push(new Array());


// function to add an edge to graph
function addEdge(v, w) {
    adj[v].push(w);
    adj[w].push(v);
}

function isReachable(s, d) {
    // Base case
    if (s == d)
        return true;

    // Mark all the vertices as not visited
    var visited = new Array(V).fill(false);

    // Create a queue for BFS
    var queue = new Array();

    // Mark the current node as visited
    visited[s] = true;
    queue.push(s);

    while (queue.length != 0) {

        // Dequeue a vertex from queue
        s = queue.pop();

        // Get all adjacent vertices of the dequeued vertex s
        // If a adjacent has not been visited, then mark it
        // visited and enqueue it
        for (var i = 0; i < adj[s].length; i++) {

            // If this adjacent node is the destination node,
            // then return true
            if (adj[s][i] == d)
                return true;

            // Else, continue to do BFS
            if (!visited[adj[s][i]]) {
                visited[adj[s][i]] = true;
                queue.push(adj[s][i]);
            }
        }
    }

    return false;
}


// Create a graph given in the above diagram
addEdge(0, 1);
addEdge(0, 2);
addEdge(3, 5);
addEdge(5, 4);
addEdge(4, 3);

var u = 2,
    v = 4;
console.log("Path exists from "+u+ " to " +v+ " :" ,isReachable(u, v))