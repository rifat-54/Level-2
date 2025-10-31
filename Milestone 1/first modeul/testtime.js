// const startTime=performance.now()

console.time("task")

for(let i=0;i<=50;i++){
    console.log(i);
}

// const endTime=performance.now()

// console.log(`this code took ${endTime-startTime} - ms`);

console.timeEnd("task")