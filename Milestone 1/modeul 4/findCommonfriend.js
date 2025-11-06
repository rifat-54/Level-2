const count=10000;
const userA=[]
const userB=[]

const createUser=(id)=>{
    return ({id:`user_id:${id}`,name:`user ${id}`})
}

for(let i=1 ;i<count;i++){
    userA.push(createUser(i))
    userB.push(createUser(i+5000))
}

const commonFriendSlow=()=>{
    const startTime=performance.now()
    const commonFriend=[]
    userA.forEach((usera)=>{
        userB.forEach((userb)=>{
            if(usera.id===userb.id){
                commonFriend.push(usera)
            }
        })
    })
    const endTime=performance.now()

    return {count:commonFriend.length,time:endTime-startTime}
}


const commonFriendFirst=()=>{
    const startTime=performance.now()
    const set=new Set()

    userA.forEach((user)=>{
        set.add(user.id)
    })
    userB.forEach((user)=>{
        set.add(user.id)
    })

    const total=(userA.length+userB.length)-set.size;


    const endTime=performance.now()
     return {count:total,time:endTime-startTime}
}

// console.log(userA,userB);

console.log( commonFriendSlow());
console.log(commonFriendFirst());