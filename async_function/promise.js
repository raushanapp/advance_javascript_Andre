const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Work In Progress...");
    }
    else {
        reject("Not Work In Progress...");
    }
});

promise.then((res) => res + "!Chian")
    .then((res) => console.log(res))

//  testing 
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => {
    return fetch(url).then((result) => result.json());
})).then((res) => {
    console.log(res[0])
    console.log(res[1])
    console.log(res[2])
    console.log(res[3])
}).catch((err) => {
    console.log(err)
})


const pomise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "Promise2"));
const pomise3 = new Promise((resolve, reject) => setTimeout(resolve, 150, "Promise3"));
const pomise4 = new Promise((resolve, reject) => setTimeout(resolve, 200, "Promise4"));
const pomise5 = new Promise((resolve, reject) => setTimeout(resolve, 300, "Promise5"));

Promise.all([pomise2,pomise3,pomise4,pomise5]).then((res)=>console.log(res))