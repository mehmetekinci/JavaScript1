/* *** String! *** */

// 1.1

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

// 1.2

console.log(myString.length);

// 1.3 & 1.4

console.log(myString.replace(/,/g, " "));

/* ***Arrays!*** */

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// 2.1

favoriteAnimals.push("turtle");

// 2.2

console.log(favoriteAnimals);

// 2.3

favoriteAnimals.splice(1, 0, "meerkat");

// 2.4

console.log(
  'favoriteAnimals will be: ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"] '
);

// 2.5

console.log(favoriteAnimals);

// 2.6

console.log("The array has a length of : 5");

// 2.7

favoriteAnimals.splice(3, 1);

// 2.8

console.log(favoriteAnimals);

// 2.9

console.log(favoriteAnimals.indexOf("meerkat"));

// 2.10

console.log("The item you are looking for is at index: 1");

        /* *** More JavaScript *** */

        // 1

function threeArguments(a, b, c) {
  var sum = a + b + c;

  return sum;
}

        // 2

function colorCar(car) {
  return car;
}

let car = "a red car";

console.log(colorCar(car));

        // 3

const person = {
  name: "Mehmet Ekinci",
  gender: "M",
  adres() {
    console.log("Koemeershoeve");
  }
};
console.log(person);

        // 4

function vehicleType(color,code) {
  let type = "";
  if (code === 1) {
    type = " car";
  } if (code === 2) {
    type = " motorbike";
  }

  console.log("a "+ color + type)

}

vehicleType("blue", 2);

        // 5

console.log(3 === 3 ? "yes" : "no")

        // 6



function vehicle(color,code,age) {
  let type,condition = "";

  if (code === 1) {
    type = " car";
  } if (code === 2) {
    type = " motorbike";
  } if (age >= 2) {
    condition = " used";
  } if ((age >= 0) && (age <= 1)) {
    condition = " new";
  }
  
  console.log("a " + color + condition + type);

}
vehicle("blue",1,5);

        // 7

let vehicles = ["motorbike", "caravan", "bike", "car", ]

        // 8

console.log(vehicles[2]);

        // 9

function newVehicle(color,code,age) {
  let type,condition = "";
  if (code === 1) {
    type = " motorbike";
  } if (code === 2) {
    type = " caravan";
  }  if (code === 3) {
    type = " bike";
  } if (code === 4) {
    type = " car";
  } if (age >=2) {
    condition = " used";
  } if ((age >= 0) && (age <=1)) {
    condition = " new";
  }
  
  console.log("a " + color + condition + type)
}
newVehicle("green",3,1);

        // 10
let advertisement = "Amazing Joe's Garage, we service "
function reAdvertisement(advertisement, vehicles){

  for( let i = 0; i < vehicles.length ;i++){
    const lastElement = vehicles[vehicles.length-1];
    const beforLastElement = vehicles[vehicles.length-2];
    const currentElement = vehicles[i];

    if (currentElement === lastElement) {
      advertisement = advertisement + currentElement + ".";
    } else if (currentElement === beforLastElement) {
      advertisement = advertisement + currentElement + " and ";
    } else {
      advertisement = advertisement + currentElement + ", "
    }


  } 
  return advertisement;
}
console.log(reAdvertisement(advertisement,vehicles));

        // 11

// If you add more vehicle to array, you will be add to advertisement.
function newFunction(){
vehicles.push("truck");
 return console.log(reAdvertisement(advertisement,vehicles))
}
newFunction();


        // 12

let newObject = {};

        // 13

let hackYourFuture = new Object();

hackYourFuture.teachers = "Philipp, Rob, Unmesh, Bonan, Yash";

console.log(hackYourFuture);



        // 14

hackYourFuture.langs = "HTML, CSS, CLI, GIT-Bash, JS";

console.log(hackYourFuture);


        // 15

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y);  // false - reference is not same
console.log(x === y); // false - reference is not same
console.log(z == y); // true - objects returns true when they reference the same memory location.
console.log(z == x);  // false - reference is not same

        // 16

const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;
console.log(o2.foo)
console.log(o3)

console.log(o1 == o2);  // false
console.log(o2 == o3);  // true
console.log(o3 == 01);  // false
console.log(o2 == 01);  // false

// when we change o1 whit o3
/*

const o3 = { foo: "bar" };
const o2 = { foo: "bar" };
const o1 = o2;

*/

console.log(o1 == o2);  // true
console.log(o2 == o3);  // false
console.log(o3 == o1);  // false
console.log(o2 == o1);  // false

// when we change o2 whit o3, giving syntax error

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// sure. when you use o2 = o3, o2 declares twice. giving syntax error.  




        // 17

// "typeof bar" is number but "typeof typeof bar" will be string.

// because first of all, js will check first typeof which is 
// the nearby to variable : (typeof bar) = "number"
// second check will be  (typeof "number") = string.