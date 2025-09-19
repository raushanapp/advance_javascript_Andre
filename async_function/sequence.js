//  3
//  parallel
//  sequencial
// race

const promisify = (item, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(item), delay);
    });
};

const a = () => promisify("A", 100);
const b = () => promisify("B", 500);
const c = () => promisify("C", 1000);


async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel is Done ${output1}, ${output2}, ${output3}`;
};

// parallel().then(console.log)

async function race() {// this means who is gone return first response  is printed
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `Race is Done ${output1}`;
}

// race().then(console.log);

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`;
}

parallel().then(console.log)

sequence().then(console.log);
race().then(console.log);
