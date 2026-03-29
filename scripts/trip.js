// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------

const driver_name = "Aidan Sanchez";
const distance_miles = 200;
const mpg = 25;
const gas_price = 3.5;
const fuel_capacity = 12;
const is_round_trip = true;

let total_distance;

// ------------------------------------------------------------
// Derived / Calculated Values
// ------------------------------------------------------------

if (is_round_trip) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}

console.log("Total distance:", total_distance);

// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------

function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}

function calculateFuelCost(gallons, gas_price) {
  return gallons * gas_price;
}

// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------

const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const total_cost = calculateFuelCost(gallons_needed, gas_price);

const miles_per_tank = mpg * fuel_capacity;

let miles_traveled = 0;
let stop_number = 1;
let running_cost = 0;

while (miles_traveled + miles_per_tank < distance_miles) {
  miles_traveled += miles_per_tank;

  const gallons_this_stop = fuel_capacity;
  const cost_this_stop = calculateFuelCost(gallons_this_stop, gas_price);
  running_cost += cost_this_stop;

  console.log(
    `Stop ${stop_number}: ${miles_traveled} miles traveled, total spent so far: $${running_cost.toFixed(2)}`,
  );

  stop_number++;
}

console.log("----- Road Trip Summary -----");
console.log(`Driver: ${driver_name}`);
console.log(`Total distance: ${total_distance} miles`);
console.log(`Estimated gallons needed: ${gallons_needed.toFixed(2)}`);
console.log(`Estimated total cost: $${total_cost.toFixed(2)}`);
