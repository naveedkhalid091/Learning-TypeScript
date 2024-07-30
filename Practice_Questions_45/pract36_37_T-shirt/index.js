function make_shirt(size, text) {
    console.log(`The Shirt size is ${size} and the message printed on it is ${text}`);
}
make_shirt("M", "Pakistan");
// Large Shirt with default message
function make_shirt1(text, size = "L") {
    console.log(`The Shirt size is ${size} and the message printed on it is ${text}`);
}
make_shirt1("I love TypeScript");
export {};
