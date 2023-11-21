// Math problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//This is my lab implemetation
//Check if all numbers are divisible by 5. Cache the result in a variable.

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(`Is all numbers are divisible by 5? ${isDivisibleBy5}`);

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirst_grater_Last = n1 > n4;

console.log(
  `Is the first number is larger than the last ? ${isFirst_grater_Last}`
);

//Arithmetic chain:
console.log(
  `The result of subtracting the first number ${n1} from the second number ${n2} is ${
    n2 - n1
  }`
);

console.log(
  `The result of multipling the subtraction result by the third number ${n4} is ${
    (n2 - n1) * n3
  }`
);

console.log(
  `The remainder of dividing this multiplication result by the fourth number ${n4} is ${
    ((n2 - n1) * n3) % n4
  }`
);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate !!??
const isNotOver25 = n1 < n2 < n3 < n4 <= 25;

// Math 2

let tripDistance = 1500;
let fuelBudget = 175;
const avgFuelCost = 3;

//Driving at 55mph

console.log(
  `At 55 miles per hour, you get 30 miles per gallon. Then the entire trip requires ${
    tripDistance / 30
  } gallons`
);

console.log(`Is your budget be enough to cover the fuel expense: \n
The answer is ${fuelBudget > (tripDistance / 30) * 3} because you need ${
  tripDistance / 30
} gallons for this trip that will cost ${
  3 * (tripDistance / 30)
} and you have budget of $${fuelBudget}`);

console.log(
  `At 55 miles per hour, the trip will take ${tripDistance / 55} hrs`
);

//Driving at 60mph

console.log(
  `At 60 miles per hour, you get 28 miles per gallon. Then the entire trip requires ${
    tripDistance / 28
  } gallons`
);

console.log(`Is your budget be enough to cover the fuel expense: \n 
The answer is ${fuelBudget > (tripDistance / 28) * 3} because you need ${
  tripDistance / 28
} gallons for this trip that will cost ${
  3 * (tripDistance / 28)
} and you have budget of $${fuelBudget}`);

console.log(
  `At 60 miles per hour, the trip will take ${tripDistance / 60} hrs`
);

//Driving at 75mph

console.log(
  'At 75 miles per hour, you get 23 miles per gallon. \
   Then the entire trip requires' +
    (tripDistance / 23) + 'gallons'
);

console.log(`Is your budget be enough to cover the fuel expense: \n 
The answer is ${fuelBudget > (tripDistance / 23) * 3} because you need ${
  tripDistance / 23
} gallons for this trip that will cost ${
  3 * (tripDistance / 23)
} and you have budget of $${fuelBudget}`);

console.log(
  `At 75 miles per hour, the trip will take ${tripDistance / 75} hrs`
);


console.log(
  `At 60 miles per hour makes most sense when comparing the results`
);
