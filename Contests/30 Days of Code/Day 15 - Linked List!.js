public static Node insert(Node head,int data)
{
    if (head == null) {
        head = new Node(data);
    } else {
        Node curNode = head;
        
        while (curNode.next != null) {
            curNode = curNode.next;
        }
        
        curNode.next = new Node(data);
    }
       
    return head;
}