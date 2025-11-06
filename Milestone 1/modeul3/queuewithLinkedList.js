
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{

    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    
    

    enqueue(value){

        const newNode=new Node(value)

        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }

        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        
        const deltedNode=this.head;
        this.head=this.head.next;
        if(this.head===null){
            this.tail=null;
        }
        this.length--;
        return deltedNode.value;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }

        return this.head.value;
    }

    isEmpty(){
        return this.length===0;
    }

    print(){

        if(this.isEmpty()){
            return undefined;
        }

        let currentNode=this.head;
        const arr=[]
        while(currentNode!=null){
            arr.push(currentNode.value)
            currentNode=currentNode.next;
        }
        console.log(arr.join(' -> '),'null');
    }
}

const queue=new Queue();

console.log(queue.isEmpty());
queue.enqueue(1)
console.log(queue.peek());
console.log(queue.isEmpty());
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// console.log(queue.peek());
queue.print()