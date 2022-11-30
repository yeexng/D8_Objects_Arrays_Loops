/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let positiveNumbers = [1,2,3,4,5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let person = {
    name: "Sam",
    surname: "Ng",
    emailAddress: "xuanng96@hotmail.com",
    age: 26,}

    console.log(person) 

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

person.drivingLicense = true;
console.log(person)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete person.age;
console.log(person)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
 
 person = {
    name: "Sam",
    surname: "Ng",
    emailAddress: "xuanng96@hotmail.com",
    age: 26,
    drivingLicense: true,
}
delete person.age;

console.log(person)

let person2 = {}
    person2 = Object.assign(person2,person);
    person2.emailAddress = "hahaha@hotmail.com",

console.log(person2.emailAddress !== person.emailAddress)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart= 49;

if (totalShoppingCart >= 50) {
    console.log ("Free Shipping... Total Cost: $" , totalShoppingCart)
} else {
    console.log ("The shipping fees will be $10... Total Cost: $"  + (totalShoppingCart + 10) )
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log ("Black Friday Sales 20% off")

totalShoppingCart = 30;
let totalCost = (totalShoppingCart * 0.8)

if ((totalCost) >= 50) {
    console.log ("Free Shipping... Total cost: $" , totalCost  )
} else {
    console.log ("No free Shipping... Total cost: $" + (totalCost + 10)) 
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
 
let car = {
    brand : "Tesla",
    model : "Model-X",
    licensePlate : "8888",
}

let car3 = {}
car3 = Object.assign (car3, car)
car3.licensePlate = "1111"

let car4 = {}
car4 = Object.assign (car4, car)
car4.licensePlate = "2222"

let car5 = {}
car5 = Object.assign (car5, car)
car5.licensePlate = "3333"

let car6 = {}
car6 = Object.assign (car6, car)
car6.licensePlate = "6666"

let car7 = {}
car7 = Object.assign (car7, car)
car7.licensePlate = "7777"

console.log (car)
console.log (car3)
console.log (car4)
console.log (car5)
console.log (car6)
console.log (car7) 

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carForRent = [car,car3,car4,car5,car6,car7]; 

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carForRent.pop ()
carForRent.shift() 

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
 
console.log(typeof car)
console.log(typeof car.brand)
console.log(typeof car.licensePlate)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
 
let carsForSale = [];

carsForSale.push ("BMW","Toyota","Lexus")
console.log(carsForSale)

let totalCars = (carsForSale.length + carForRent.length)
console.log (totalCars) 

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let index = 0; index < carsForSale.length; index++) {
    const element = carsForSale[index];
    console.log(element)} 
