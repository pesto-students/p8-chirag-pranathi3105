
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
 
    /* Function to reverse the linked list */
    function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }
 
    // prints content of double linked list
    function printList(node) {
        let arr = [];
        while (node != null) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }
     
        var head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
 
        console.log("Given linked list");
        console.log(printList(head));
        head = reverse(head);
        console.log("Reversed linked list");
        console.log(printList(head));