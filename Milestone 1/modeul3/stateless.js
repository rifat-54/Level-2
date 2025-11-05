
const counter=(amount)=>{
    let ctn=0;
    ctn=ctn+amount;
    return ctn;
}

// console.log(counter(3));
// console.log(counter(2));

const counter1={
    ctn:0,
    add(amount){
        this.ctn=this.ctn+amount
    },
    print(){
        console.log(this.ctn);
    }
}

counter1.add(3)
counter1.add(2)
counter1.print()