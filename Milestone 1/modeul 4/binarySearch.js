
const binarySearch=(arr,target)=>{
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        const mid=Math.floor((low+high)/2);
        const got=arr[mid]
        if(got===target){
            return mid;
        }else if(got>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }

    return 'not found'
}

const arr=[2,3,5,7,8,11,23,36,48,65]

console.log(binarySearch(arr,2));