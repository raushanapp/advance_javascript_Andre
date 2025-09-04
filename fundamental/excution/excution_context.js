function printName() {
    return "Vineet Jain"
}

function findName() {
    return printName();
}

function sayMyName() {
    return findName();
}

sayMyName();

//  as soon as file create in the browser create global excution context in the global excution this keyword and window both are same
// this === window;  true 
//  function it self have excution context during the runtime
// emplty file of html and js empty file it means in the browser global excution context  created 
//  global object and this keyword both are and global object in the browser called window and this keyword are same 
//  when global excution created that called creation phase when run your code that is excution 
//  when global created in browser and push into stack and sayMyName also create a own context 
// https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context
// https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno