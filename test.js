function getCounter(a) {
    return function (b) {
        return a + b;
    };
}

const a = getCounter(2)(3);

console.log(a);
