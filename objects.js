// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

 /*
let numbers = [1, 2, 3, 4, 5]
numbers.reverse()
console.log(numbers)
*/

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/










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
/*
var num
num = [1, 2, 3, 4, 5]

console.log(num)
*/

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/


/*
let myData = {
    name: "Naveen",
    surname: "Manchala",
    email: "mnaveen9698@gmail.com",
    age: 23,
    country: "India"
}

console.log(myData)

*/


/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/


let myData = {
    name: "Naveen",
    surname: "Manchala",
    email: "mnaveen9698@gmail.com",
    age: 23,
    country: "India",
    hasDrivingLicense: true
}

console.log(myData)



/* EXERCISE 4
 Remove from the previously created object the age property.
*/
/*
console.log("Removing Age Property")
delete myData.age
console.log(myData)


*/


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/


let anotherData = {
    name: "Paul",
    surname: "Jones",
    email: "pauljones2345@gmail.com",
    age: 25,
    country: "Italy",
    hasDrivingLicense: false
}
console.log(anotherData)
console.log("Checking Equality:",

myData.email !== anotherData.email
)




/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/


let totalShoppingCart = 40;

if (totalShoppingCart <= 50) {
    totalShoppingCart += 10;
}
console.log(totalShoppingCart)




/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoppingCart2 = 40;

if (totalShoppingCart2 <= 50) {
    totalShoppingCart2 += 10;
}

let discount = totalShoppingCart2*0.2;
totalShoppingCart2 = totalShoppingCart2 - discount;
console.log(totalShoppingCart2)







/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car
let car1 = {
    brand: "BMW",
    model: "X6",
    licensePlate: "capt3000"
};

let car2 = {}
Object.assign(car2, car1)
car2.licensePlate = "capt5000"

let car3 = {}
Object.assign(car3, car1)
car3.licensePlate = "capt6000"

let car4 = {}
Object.assign(car4, car1)
car4.licensePlate = "capt7000"

let car5 = {}
Object.assign(car5, car1)
car5.licensePlate = "capt8000"

let car6 = {}
Object.assign(car6, car1)
car2.licensePlate = "capt9000"

console.log(car1, car2, car3, car4, car5, car6)



/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5, car6];
console.log("carsForRent", carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/


delete carsForRent.car1
delete carsForRent.car6


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/*
console.log (typeof car, typeof car.licensePlate, car.brand);
*/

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [car1, car2, car3]
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
}

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
