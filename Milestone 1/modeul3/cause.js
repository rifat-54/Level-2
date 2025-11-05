
const counter=()=>{
  let count=0;
  return add=(amount)=>{
    count=count+amount;
    return count;
  }
}

const counterfun=counter()
console.log(counterfun(2));
console.log(counterfun(3));