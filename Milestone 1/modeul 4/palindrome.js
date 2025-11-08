
//method 1
const checkPalimdrome=(arr)=>{

    const normalize=arr.toLowerCase().replace(/[^a-z0-9]/g,'')

    let i=0;
    let j=arr.length-1;

    while(i<j){
        if(arr[i]!==arr[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
}

//method 2

const checkPalimdromeByReverse=(arr)=>{
    const reverse=arr.split("").reverse().join("")
    console.log(arr);
    console.log(reverse);

    for(let i=0;i<arr.length;i++){
        if(arr[i]!==reverse[i]){
            return false;
        }
    }
    return true;
}

console.log(checkPalimdromeByReverse('level'));
console.log(checkPalimdromeByReverse('abccba'));
console.log(checkPalimdromeByReverse('abxccba'));

// console.log(checkPalimdrome('plevel'));
// console.log(checkPalimdrome('abccba'));