export class Stack{
    constructor(){
        this.item=[];
    }

    push(value){
        this.item.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.item.pop()
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.item[this.item.length-1]
    }
    print(){
        console.log(this.item.slice().reverse().join(' -> '));
    }
    isEmpty(){
        return this.item.length===0
    }
}

// const stack=new Stack()
// console.log(stack.isEmpty());
// console.log(stack.print());
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.peek());
// stack.print()
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
