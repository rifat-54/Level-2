
const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        console.log(`before step: ${i+1} -> `,arr);

        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
        }

        const tmp=arr[i];
        arr[i]=arr[minIndex]
        arr[minIndex]=tmp;

        console.log(`after step: ${i+1} -> `,arr);
        console.log('\n -------------------------------------------\n');
    }
}

const arr=[5,7,3,2,1];

const data= selectionSort(arr)
