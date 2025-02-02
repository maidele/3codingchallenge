
let price = ["$20", "$25", "$30", "$35", "$40"]; 
price.push("71");
price.pop();
console.log("Updated Product List:", products);

//Task 2
let orders = [100,200,300,400,500];// Order array is declared

orders[2]+=5; // The third quantity within the order is being increased by 5 here

let totalOrders = orders.reduce((total, amount) => total + amount, 0);

console.log("Orders with their Updates:", orders)
console.log(`Orders with their Updates': $${totalOrders}`);  // Output: Total amount of orders: $1500 !!