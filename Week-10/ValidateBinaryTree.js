// check if given Binary tree
// is a BST or not

class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

//Root of the Binary Tree
let root;

function isBST() {
    return isBSTMain(root, Number.MIN_VALUE,
        Number.MAX_VALUE);
}


function isBSTMain(node, min, max) {
    // an empty tree is BST 
    if (node == null)
        return true;

    if (node.data < min || node.data > max)
        return false;

    // check the subtrees recursively

    return (isBSTMain(node.left, min, node.data - 1) &&
        isBSTMain(node.right, node.data + 1, max));
}

// root = new Node(2);
// root.left = new Node(1);
// root.right = new Node(3);

root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.right.left = new Node(3);
root.right.right = new Node(6);
if (isBST())
    console.log("IS BST");
else
    console.log("Not a BST");