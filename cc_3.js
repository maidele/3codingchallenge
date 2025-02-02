//Task 1

let price = ["$20", "$25", "$30", "$35", "$40"]; // Price being declared

price.push("71");// A price that is new is being added to the array 

price.pop();// The 1st price is being removed

console.log("Updated Price List:", price);

//Task 2
let orders = [100,200,300,400,500];// Order array is declared

orders[2]+=5; // The third quantity within the order is being increased by 5 here

let totalOrders = orders.reduce((total, amount) => total + amount, 0);

console.log("Orders with their Updates:", orders)
console.log(`Number of Total Orders': $${totalOrders}`);  // Output: Total amount of orders: $1500 !!

//Task 3

let employee = {
    id: 234,
    name: "Maxine",
    role: "Data Analyst",
    performanceScore: 80,
    isActive: true
};

employee.performanceScore= 85 // score for the employee's performance is being updates

let propertypromotionEligible = true;// This employee qualifies for a promotion!

console.log("Up-to-date Records for Employee:", employee)


// Task 4-
let customers = [
    { customerName: "Alexa Roberts", feedbackText: " Maxine was amazing!", rating: 90/100},
    { customerName: "Jamie Fox", feedbackText: "Maxine answered the majority of my questions.", rating: 80/100 },
    { customerName: "Christie Stevens", feedbackText: "Maxine assisted with solving an issue of mine promptly!", rating: 85/100 }
 ];
 
 customers.push({ customerName: "Kelly Louis", feedbackText: " Maxine was a great, wish we could have more time to speak.", rating: 85/100});
 
 console.log("Customer Feedback", customers);

 // Task 5-

 let order = {
    itemName: Printer,
    stockCount: 10,
    price: 570,
    calculateTax(amount) {//Calculating tax
    return amount * 10// Calculate stock 
    }
 };

console.log ("Inventory Order Information:", order);
console.log ("Tax Value:", calculateTax(570));


