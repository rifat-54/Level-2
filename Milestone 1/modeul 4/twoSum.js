
const twoSum=(arr,target)=>{
    const map=new Map()

    for(let i=0;i<arr.length;i++){
        const currentValue=arr[i];
        const complement=target-currentValue;
        console.log('current->: ',currentValue);
        console.log('need->: ',complement);
        console.log(map);

        if(map.has(complement)){
            return [map.get(complement),i]
        }

        map.set(currentValue,i);
    }

return undefined;

}

console.log(twoSum([2,11,7,15],15));
