/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

// * Q1. Add some tourist attractions to England
 
unitedKingdom[1].touristAttractions = ["Big Ben", "Stonehenge"];

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

for (let i = 0; i < unitedKingdom.length; i++) {
  if (unitedKingdom[i].name === "Wales") {
    unitedKingdom[i].capital = "Cardiff";
    break;
  }
}

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

const northernIrelandKeys = Object.keys(unitedKingdom[3]);

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

const scotlandPopulation = unitedKingdom[0].population;
let comparisonResult = "";

for (let i = 0; i < unitedKingdom.length; i++) {
  if (unitedKingdom[i].population > scotlandPopulation) {
    comparisonResult = "bigger";
  } else if (unitedKingdom[i].population < scotlandPopulation) {
    comparisonResult = "smaller";
  } else {
    comparisonResult = "equal";
  }
  console.log(`${unitedKingdom[i].name}'s population is ${comparisonResult} than Scotland's population.`);
}
