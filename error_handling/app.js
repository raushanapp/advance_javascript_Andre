// Error  Handling in javascripts

// 1. Error constructure function

let err = new Error("Oppise");
console.log(err, "==>");
//  we have keyword
//  we can through new error using instance of error
// 1. throw keyword

//  if we just use by new Error("Oopise")
//  three properties have access this

let myError = new Error("OOPISE");
//  here I can access three way
myError.name;
myError.message;
myError.stack; // stack terrence   this way see what responsceable to cause error

function a() {
  const b = new Error("Error Message");
  return b;
}
a();

new SyntaxError(); //  throw me message  ---> Uncaught SyntaxError : Unexpected token
new ReferenceError(); // Uncaught ReferenceError :  something is not defined at  and also callstack terrencing it  line number is wrong

//  throw statement  generate the error

//  try{} and catch{}

function fail() {
  try {
    console.log("this works");
  } catch (error) {
    console.log("we have made an oopise", error);
  }
}

fail();

function fail1() {
  try {
    throw new Error("oopise!!!");
    console.log("this works");
  } catch (error) {
    console.log("we have made an oopise", error);
  } finally {
    console.log("still good"); // no matter what happen in code finally always runs
  }
}
fail1();

//  nested try catch
//  this syncronous code
try {
  try {
    something();
  } catch (error) {
    throw new Error(error);
  }
} catch (error) {
  console.log(error); // but at end we recieved here error
}

//  this code not work
try {
  setTimeout(function () {
    fakevariable;
    console.log("This, code not work");
  }, 1000);
} catch (error) {
  console.log(error);
}

//  Promise and ASYNC code to catch error s

Promise.resolve("asyncfail")
  .then((res) => {
    //  in this type error sliently handling error in the browser side and our program sliently failed
    throw new Error("#1 fail");
    return res;
  })
  .then((rs) => {
    console.log(rs);
  });

//  we need to add catch
Promise.resolve("asyncfail")
  .then((res) => {
    throw new Error("#1 fail");
    return res;
  })
  .then((rs) => {
    console.log(rs);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.resolve("asyncfail")
  .then((res) => {
    throw new Error("#1 fail");
    return res;
  })
  .then((rs) => {
    console.log(rs);
  })
  .catch((err) => {
    return err;
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve("asyncfail")
  .then((res) => {
    throw new Error("#1 fail");
    return res;
  })
  .then((rs) => {
    console.log(rs);
  })
  .catch((err) => {
    throw new Error("#2");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("final error", err);
  });

//  indside promise
Promise.resolve("asyncfail")
  .then((res) => {
    Promise.resolve().then(() => {
      throw new Error("#3 fail");
    });
  })
  .then((rs) => {
    console.log(rs);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("final error", err);
  });

Promise.resolve("asyncfail")
  .then((res) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch((e) => console.log(e));
  })
  .then((rs) => {
    console.log(rs);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("final error", err);
  });

//  we need each level to handle error

Promise.resolve("asyncfail")
  .then((res) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch((e) => console.log(e));
  })
  .then((rs) => {
    console.log(rs);
  })
  .catch((err) => {
    console.log("final error", err);
  });

//  new async await

async function test() {
  try {
    await Promise.reject("Oopsie!");
  } catch (error) {
    console.log(error);
  }
  console.log("is this still good");
}

test();

(async function () {
  try {
    await Promise.resolve("Oopsie!");
    await Promise.reject("Oopsie! 2");
  } catch (error) {
    console.log(error);
  }
  console.log("is this still good");
})();

//  Exercise

(function () {
  try {
    throw new Error();
  } catch (error) {
    var error = 5;
    var boo = 10;
    console.log("Inside the catch block", error);
  }
  console.log(error);
  console.log(boo);
})();

//

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.favouriteSnack = "grapes";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
    this.message = "data base error";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "PermissionError";
    this.favouriteSnack = "grapes";
  }
}

const a = new AuthenticationError("oopsie!!");
const b = new DatabaseError("oopsie!!");
b instanceof DatabaseError;
a.favouriteSnack;
throw new AuthenticationError("oopsie!!!");
