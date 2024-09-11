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

let spacePerPlant = 0.8;
let numPlants = 20;
let totalSpaceNeeded = spacePerPlant * numPlants;
console.log(`Total square meters needed for all plants:`, totalSpaceNeeded);

// Predict the plant growth after a specific number of weeks.
// NumPlants Week 1 - 20 Plants
// NumPlants Week 2 - 20 * 2 = 40
// NumPlants Week 3 - (20 * 2) * 2 = 80
// NumPlants Week 4 - ((20 * 2) *2) * 2 = 160
// capacity = numPlant * 2**week
let weekCounter = 1;
numPlants = numPlants * 2 ** weekCounter;
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
if (numPlants > 0.8 * area) {
  console.log(`Prune`);
} else if (numPlants >= 0.5 * area && numPlants <= 0.8 * area) {
  console.log(`Monitor`);
} else {
  console.log(`Plant`);
}

// ------- Part Two: Thinking Bigger -------

// ------- Part Three: Errors in Judgement -------
