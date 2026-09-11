var database = [
  {
    username: "anderi",
    password: "supersecret",
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

function singIn(user, pass) {
  console.log("USERR", user, pass);
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry wrong username and password");
  }
}

singIn(useNamePrompt, passwordPrompt);
