// JavaScript program to find depth of tree

class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let root;

function maxDepth(node) {
    if (node == null)
        return 0;
    else {
        /* compute the depth of each subtree */
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        /* use the larger one */
        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}


root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
root.right.right.right = new Node(5);
console.log("Height of tree is : " +
    maxDepth(root));