//Task 1

let price = ["$20", "$25", "$30", "$35", "$40"]; // Price being declared

price.push("71");// A price that is new is being added to the array 

price.pop();// The 1st price is being removed

console.log("Updated Product List:", products);

//Task 2
let orders = [100,200,300,400,500];// Order array is declared

orders[2]+=5; // The third quantity within the order is being increased by 5 here

let totalOrders = orders.reduce((total, amount) => total + amount, 0);

console.log("Orders with their Updates:", orders)
console.log(`Orders with their Updates': $${totalOrders}`);  // Output: Total amount of orders: $1500 !!