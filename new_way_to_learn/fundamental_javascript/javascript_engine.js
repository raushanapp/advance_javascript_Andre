//  How javascripts works

//  1. Javascript Engine
//  2. Javascript Runtime
//  3. Interpreter/ Compiler/JIT Compiler
//  4. Writing Optimized Code 
//  5. Call Stack + Memory Heap
//  6. Stack OverFlow + Memory Leaks
//  7. Garbage Collection
//  8. Node.js
//  9. Single Threaded Model

// I can learn these above given fundamental topic one by  one


//  ==> Javascript Engine

const isHappy = true;


function jsengine(code){

	return code.split(/\s+/)
}

let result = jsengine("var a=5");

console.log(result);