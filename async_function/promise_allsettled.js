// Promise allsettled

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 300));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 300));

Promise.allSettled([promiseOne, promiseTwo]).then(res=>console.log(res[1].status));