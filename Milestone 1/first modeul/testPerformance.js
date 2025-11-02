const a=[];
const b=[];

const c=[]

for(let i=1;i<=500000;i++){
    if(i<=300){
        a.push(i);
    }
    b.push(i)
}

console.log(`a lenth-> ${a.length} \n b lenth-> ${b.length}`)


console.time('timea')
const ansa= a.map((item)=>{c.push(item)})
console.timeEnd('timea')

console.time('timeb')
const ansb= b.map((item)=>{c.push(item)})
console.timeEnd('timeb')


// console.log(typeof(ansa))

console.time('taskc')

const answer=b.find((item)=>b[item]===400)

console.log(answer);

console.timeEnd('taskc');
