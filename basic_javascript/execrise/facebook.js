var database = [
  {
    username: "anderi",
    password: "supersecret",
  },
  {
    username: "sally",
    password: "1234",
  },
  {
    username: "ignore",
    password: "12345",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is soooo coool!",
  },
];

var useNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function singIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

singIn(useNamePrompt, passwordPrompt);
