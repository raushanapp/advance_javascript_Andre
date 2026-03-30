// Async Await
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
];
console.log("ASYNC Before----")
async function fetchData () {
    try {
        const [users, posts, comments, albums] = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
        console.log("USERS",users)
        console.log("POSTS",posts)
        console.log("COMMENTS", comments);
        console.log("ALBUMS", albums);
    } catch (error) {
        console.log(error);
    }
}
fetchData()
Promise.resolve("Wait").then(res => console.log(res));
console.log("after async function.......")

//  for await of features ES9 

const getData = async function () {
    const arrayOfPromise = urls.map((url) => fetch(url));
    for await (let requests of arrayOfPromise) {
        const response = await requests.json();
        console.log(response);
    }
}

getData()