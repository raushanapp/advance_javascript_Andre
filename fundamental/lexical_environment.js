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

writeCode()