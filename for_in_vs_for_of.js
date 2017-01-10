const data = ['apple', 'orange', 'banana'];
Array.prototype.foo = function() {};

for (let key in data) {
    console.log(data[key]);
}

for (let value of ['apple', 'orange', 'banana']) {
    console.log(value);
}
