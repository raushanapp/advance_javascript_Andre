// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

function key_less_car(age) {
  if (age < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (age === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  } else {
    return "Powering On. Enjoy the ride!";
  }
}

let user_age = key_less_car(17);

console.log(user_age);
