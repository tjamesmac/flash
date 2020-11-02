
async function ready() {
    console.log("hello world i am in a function");
    const data = fetch('https://old.reddit.com/r/all.json')
    const results = await (await data).json()
    console.log(results, data);
}

ready();