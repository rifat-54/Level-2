const obj={
    course:{courseID:'level 1'},
   ["next Level"]:{courseID:'level 2'}
}

// console.log(obj["course"]); 

// const obj1={
//     nextLevel:{courseId:"level2"},
//     true:{courseID:"true level"}
// }

// console.log(obj1['true']);

const course1={name:"programming hero"}
const course2={name:"Next level web"}

const obj2={}
// obj2.firstKey={courseId:"level1"}
// obj2[true]={courseID:"true level"}

obj2[course1]={courseID:"level 3"}
obj2[course2]={courseId:"next level"}
 
console.log(obj2["[object Object]"])