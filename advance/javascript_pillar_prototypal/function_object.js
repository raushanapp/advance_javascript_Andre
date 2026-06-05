/*
 Funtions in javascript are also object 
 when invvoke object get two paramter (this, argument)
 two to invvoke the function 
 define a function second create object we have called method it self have function
*/
 //  first way
function foo(){
	return 1;
}
//  second way
const obje= {
	two(){
		return 2
	}
}
// const testObj= {
// 	value:"test_pro",
// 	key:2,
// 	():console.log("teusa")
// }
// console.log(testObj);
//  fucntion are first class citizens 
// 1
var stff=function(){};
//  2
function a(fn){
  fn();
};
a(function(){console.log("hi there")});
//  3
function b(){
	return function c(){console.log("Bye there")}
}

var d= b();
d();

//  Bit care full 

//  Higher order function 
// why higher order function are usefull



















