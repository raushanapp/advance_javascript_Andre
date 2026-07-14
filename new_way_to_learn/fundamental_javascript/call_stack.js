
//  call stack + memory heap

const num = 610 ; // allocate  memory for number;
const str = "some text"; // allocate the memory for a string;

const human = {  // allocate memory for an object .... and . it's values.
  
   firstName:"Raushan",
   lastName:"Kumar",
}


//  call stack 

function subtractTwo(num){
	return num -2;
}

function calculation (){
	const sumTotal = 4 + 5 ;
	return subtractTwo(subtractTwo);
}

calculation()

// stack overflow from here 

function inception(){

	inception() //  here waht happen keep add things more or more in the stack until the stack is overflow till now running the function
}

//  error getting Maximum call stack size exceeded
