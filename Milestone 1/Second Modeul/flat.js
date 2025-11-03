const arr=[1,2,3,[4,5,[6,7,[8,9,[10,11]]]]]
const data=arr.flat(Infinity)

// console.log(data);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flatArry=[...new Set(tagsFromPosts.flat())]

console.log(flatArry);