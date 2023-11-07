const output = document.getElementById("output");
const output2 = document.getElementById("output2");

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  greeting = function () {
    alert(`Hello My name is ${this.name}`);
  };
  return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
var person1 = createNewPerson("Person1");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
  this.name = {
    firstName: firstName,
    lastName: lastName,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.greeting = function () {
    alert(`Hello! My name is ${this.name}`);
  };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
var p1 = new Person("P1", "LP1", 50, "Female", [
  "swimming",
  "Coding",
  "Dancing",
]);

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
var car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.color = "white";
car.price = 50;
car.fun = function () {
  alert(`${car.brand} ${car.color} ${car.price}`);
};

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
var anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
console.log(anotherCar.brand);

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
function createHamburger(hamburger) {
  var obj = {};
  obj.hamburger = hamburger;
  return obj;
}
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
function Hamburger(bun, garnishes, cheeses, sauces, meat, patties, toppings) {
  this.bun = bun;
  this.garnishes = garnishes;
  this.cheeses = cheeses;
  this.sauces = sauces;
  this.meat = meat;
  this.patties = patties;
  this.toppings = toppings;
}

var myHamburger = new Hamburger(
  "plain",
  ["lettuce", "onion", "tomato"],
  "cheddar",
  ["mustard", "bbq"],
  "beef",
  2,
  ["hot peppers", "olives"]
);

// Make sure that the function allows for the output of a sentence that describes the hamburger, too
myHamburger.describes = function () {
  var description =
    "This hamburger has a " +
    this.bun +
    " bun with " +
    this.garnishes.join(", ") +
    ", " +
    "garnishes, " +
    this.cheeses +
    " cheese, " +
    this.patties +
    " " +
    this.meat +
    " patty(s), " +
    "and toppings with " +
    this.toppings.join(", ") +
    ".";
  return description;
};

document.getElementById("output").textContent = myHamburger.describes();

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
