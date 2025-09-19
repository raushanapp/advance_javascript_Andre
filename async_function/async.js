console.log("=== one ");

//  Callbak Queque --> Task Queque.  ==>> fasat function
setTimeout(() => { console.log("2") }, 0);
setTimeout(() => { console.log("3") }, 20);

//  Job Queque --> Micro Task Queue this is higher piroeties then Callback queque
Promise.resolve("Resolved").then((res) => console.log(res, "4"));


console.log("5===")

// call stack 

//  Web API

//  callback queque


//  event loop


console.log("Before runing async function");

async function func() { // if you are async function but inside async function you are not using await keyword it behave like normal execute at time like syncronous code 
    const resp = await Promise.resolve("Async Function Resolve"); // if we are using unitl async not resolve or resject or get reponse nunitl not moving forward
    console.log("resp",resp)
}
func()

Promise.resolve("without async function").then((res) => console.log(res));

console.log("end")