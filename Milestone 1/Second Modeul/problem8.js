const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const answer=sales.reduce((table,item)=>{
    console.log(table,item);
    if(table[item.category]){
        table[item.category]={
            totalRevenue:table[item.category].totalRevenue+item.price*item.quantity,
            itemCount:table[item.category].itemCount+item.quantity
        }
       
    }else{
        table[item.category]={
            totalRevenue:item.price*item.quantity,
            itemCount:item.quantity
        }
    }
    
   
    
        
   
        
    return table
},{})

console.log(answer);