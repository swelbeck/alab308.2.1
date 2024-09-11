// ------- Part One: Growing Pains -------
/** The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:

const PI = 3.1415;
const area = PI * radius * radius;

Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.*/

let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
console.log(`Area:`, area);

const spacePerPlant = 0.8;

let maxCapacity = area / spacePerPlant;
console.log(`Maximum Capacity:`, maxCapacity);
// Predict the plant growth after a specific number of weeks.
// capacity = numPlant * 2**week
let week = 1;
let numPlants = 20;
numPlants = numPlants * 2 ** week;
console.log(`Number of plants in week ${week}:`, numPlants);
//Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
/** This condition should be met if the plant count after the given number of weeks is greater
        than 80% of the maximum capacity of the garden. */
// --- IF numPlants > .80*Maximum capacity, THEN Prune

// Monitored, if they are growing at an acceptable rate.
/** This condition should be met if the plant count is between 50% and 80% of the maximum
        capacity of the garden after the given number of weeks. */
// --- IF (numPlants >= .50*Maximum capacity) AND numPlants < .80*Maximum capacity , THEN Monitor

// Planted, if there is room to plant more plants.
/** This condition should be met if the plant count after the given number of weeks is less
        than 50% of the maximum capacity of the garden. */
// --- IF numPlants < .50*Maximum capacity, THEN Plant

if (numPlants > 0.8 * maxCapacity) {
  console.log(`80% of Maximum Capacity:`, 0.8 * maxCapacity);
  console.log(`Prune`);
} else if (numPlants >= 0.5 * maxCapacity && numPlants <= 0.8 * maxCapacity) {
  console.log(`50% of Maximum Capacity:`, 0.5 * maxCapacity);
  console.log(`80% of Maximum Capacity:`, 0.8 * maxCapacity);
  console.log(`Monitor`);
} else {
  console.log(`50% of Maximum Capacity:`, 0.5 * maxCapacity);
  console.log(`Plant`);
}

// ------- Part Two: Thinking Bigger -------
// The conservation area in which the garden is located has multiple other gardens.
// Using the logic you have already created, determine:
/** The amount of additional space that would be required if the scientists were to start with 100
plants, and did not prune them for 10 weeks.*/
// If the space remained circular, what would be the radius of this expanded garden?

numPlants = 100;
week = 2;
// console.log(`Number of plants in expanded garden:`, numPlants);

numPlants = numPlants * 2 ** week;
console.log(`Number of plants in week ${week}:`, numPlants);
// console.log(`Maximum Capacity:`, maxCapacity);

let totalSpaceNeeded = spacePerPlant * numPlants;
console.log(
  `Total square meters needed for all ${numPlants} plants in week ${week}:`,
  totalSpaceNeeded
);
// radius = square root (area/PI)

let newRadius = Math.sqrt(totalSpaceNeeded / PI);
console.log(`New Radius:`, newRadius);

// ------- Part Three: Errors in Judgement -------
console.log(`Radius:`, radius);

// let x = 10;

// try {
//   if (x > 0) {
//     let isEven = x % 2 == 0 ? true : false;
//   } else if (x <= 0) {
//     throw "Error - Value of 0 or below.";
//   }

//   console.log(isEven);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log(x);
// }
