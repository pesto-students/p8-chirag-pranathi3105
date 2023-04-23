// to do level order traversal of Binary Tree

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

/* Class to print Level Order Traversal */

function printLevelOrder() {
    var queue = [];
    queue.push(root);
    var BT = [];
    while (queue.length != 0) {

        //The shift() method removes the first element from an array and returns that removed element..
        var tempNode = queue.shift();
       
        BT.push(tempNode.data);

        // Enqueue left child 
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }

        /* Enqueue right child */
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }
    console.log(BT);
   
}

var root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
console.log("Level order traversal of binary tree is - ");
printLevelOrder();