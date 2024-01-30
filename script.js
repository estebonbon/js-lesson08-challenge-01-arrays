var hobbies = ["soccer", "surfing", "dancing", "kizomba", "coding", "reading"];

// Logout length of hobbies
console.log(hobbies.length);

// Adds "concerts" to the end of the list
hobbies.push("concerts");

// Prints out hobbies at position 2
console.log(hobbies[2]);

// Remove of the last element
hobbies.pop();

// Adds two more elements to the arrays
hobbies.splice(2, 0, "yoga", "shopping");

//logs out hobbies array
console.log(hobbies);

// removes element from the beginning of the array
hobbies.shift();

// adds element to the beginning of the array.
hobbies.unshift("singing");

// new array for goals
var goals = ["high paying job", "finish the bible", "big savings account"];

// combines two arrays using ".concat";
var allTheThings = hobbies.concat(goals);

//
console.log(allTheThings);

// Finds an elements index (position) in an array
console.log(allTheThings.indexOf("coding"));

// Using splice to remove coding from the allTheThings array
allTheThings.splice(6, 1);

// print the new allTheThings
console.log(allTheThings);

// The item parameter inside the fraction brackets, takes the elements in the array of allTheThings and passes each of them to plans.
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});

// Prints out the plans function
console.log(plans);
