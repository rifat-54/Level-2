class Queue{
    constructor(){
        this.item=[]
    }
    enqueue(value){
        this.item.push(value)
    }

    dequeue(){
        if(this.isEmpty){
            return undefined;
        }
        this.item.shift()
    }

    peek(){
        return this.item[0]
    }

    print(){
        console.log(this.item.join(' -> '));
    }


    isEmpty(){
        return this.item.length===0
    }
}

const queue=new Queue()
queue.print()
console.log(queue.isEmpty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

queue.print()