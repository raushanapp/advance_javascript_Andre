// Lexical Environment 
//  what does means lexical environment
// In Javascript our lexical scope (available data + variable where the funtion was define)
// Determines our available variables. Not where the function is called (dynamic scope)

function runCode() {
    
    return "Run Code";
}

function writeCode() {
    return runCode();
}

// writeCode()
// only works in node js evnironment means because javascript engine does not know about this local (module) scope 
// That function is stored in the local lexical environment of the module. and javascript find local lexical environment not global environment because of when using node js 
globalThis.writeCode = writeCode; // what can we are doing first puting into global scope because node js does not where it is
console.log(globalThis.writeCode());


// lexical means it's compiler time where the code run 
