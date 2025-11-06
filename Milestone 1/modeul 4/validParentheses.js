import { Stack } from "../modeul3/stack.js";

const bracketChecker=(str)=>{
    const stack=new Stack()
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
        const char=str[i];
        if(char==='(' || char==='{' || char==='['){
            stack.push(char);
        }else{
            const top=stack.peek()
            if(char===')' && top==='('){
                stack.pop()
            }else if(char==='}' && top==='{'){
                stack.pop()
            }else if(char===']' && top==='['){
                stack.pop()
            }
            else{
                return false;
            }
        }
    }

    return stack.isEmpty()

}

const bracketCheckerMethod2=(str)=>{

    const stack=new Stack()

    const list={
        '}':'{',
        ')':'(',
        ']':'['
    }


    for(let i=0;i<str.length;i++){
        const char=str[i];

        if(char==='(' || char==='{' || char==='['){
            stack.push(char);
        }else{
            const got=stack.peek();
            const expected=list[char];
            if(got!==expected){
                return false;
            }else{
                stack.pop()
            }
        }
    }

    return stack.isEmpty()



}

console.log(bracketCheckerMethod2('({}[]({}())'));

// console.log(bracketChecker('}())'));