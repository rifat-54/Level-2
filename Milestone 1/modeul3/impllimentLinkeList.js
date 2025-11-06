class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    // check if list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (index < 0 || index > this.length) {
      console.log("invalid index: muri kha");
      return undefined;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    const currentNode=this._traverseToIndex(index)

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length++;
    // const tempNode=currentNode.next;
    // currentNode.next=newNode;
    // newNode.next=tempNode;
  }

  remove(index){

    if(index==0){
        const deltedNode=this.head;
        this.head=this.head.next;
        if(deltedNode.next===null){
            this.tail=null;
        }
        return  deltedNode.value;
    }
    const leadingNode=this._traverseToIndex(index)
    const deltedNode=leadingNode.next;
    leadingNode.next=leadingNode.next.next;
    if(leadingNode.next===null){
        this.tail=leadingNode;
    }
    return deltedNode.value;
  }

  _traverseToIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (count !== index - 1) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  print() {
    let currentNode = this.head;
    const arr = [];
    while (currentNode !== null) {
      // console.log(currentNode.value);
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" -> "), " -> null");
  }
}

const linkedlist = new linkedList();
// linkedlist.append(1).append(2).append(3);
linkedlist.append(1)
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);

// linkedlist.prepend(40).prepend(60);
// linkedlist.prepend(50);
// linkedlist.insert(2, 100);
linkedlist.print();

console.log(linkedlist.remove(2));

linkedlist.print()
