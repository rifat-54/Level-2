
const map=new Map()

const expensiveTask=(id)=>{
    console.log('ran the expensive task for : ',id);
    return {id:id,data:`Some data for id: ${id}`,timestamp:new Date().getTime()}
}

const getData=(id)=>{
    if(map.has(id)){
        console.log('cashe HIT for id:',id);
        return map.get(id);
    }
    console.log('cashe MISS for id:',id);
    const data= expensiveTask(id)
    map.set(id,data)
    return data;
}

console.log(map);
console.log(getData(123));
console.log(getData(123));
console.log(map);
