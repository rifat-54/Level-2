const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

const hasTable = posts.reduce((table, post) => {
  const { userId } = post;
  if (!table[userId]) {
    table[userId]=[]
  }
  table[userId].push(post)
  return table;
}, {});

const output=users.map((item)=>{
 return   {...item, 
    post:hasTable[item.id] || []

    }
})

// console.log(hasTable);
 console.log(JSON.stringify(output));
