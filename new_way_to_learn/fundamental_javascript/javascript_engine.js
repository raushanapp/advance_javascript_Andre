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

//  Interpreter vs Compiler

function someCalulation(x,y){
	return x + y;
}

//  interpreter doing like this 
for(let i=0; i<1000;i++){
	someCalulation(5,4);
}

//  compiler takes get starts take little bit longer to start and it fast 

for(let i=0;i<1000;i++ ){

	someCalulation(5,4); // instead of doing like this just waht does he just return 9;
	// do not do same thing again
	return 9
}

//  write code optimized 
//  in order to help the javascript code 
//  be carefull when using this below given 
// 1. eval()
// 2. arguments();
// 3. for in ;
// 4. with;
// 5. delete;
// 6. Hidden classes
// 7. Inline caching

//  Inline caching
function findUser(user){
	return `Found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName:'Johnson',
  lastName:"Junior"
}

//  if calling findUser function over again and again, so happen make the inline caching compile like 

`found Johnson Junior`

findUser(userData)

//  Hidden classes (delete keyword it's really effect the hidden classes)

function Animal(x,y){
	this.x= x;
	this.y = y;
}

const obj1= new Animal(1,2);
const obj2= new Animal(3,4);

obj1.a = 30;
obj1.b = 100;
obj2.b= 30;
obj2.a = 100;

//  so that type of code compiler make verfy confuse 


delete obj1.x = 30;











