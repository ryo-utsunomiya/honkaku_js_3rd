const set = new Set([10, 5, 5]);

console.log(set.size);
console.log(set.has(10));

for (let v of set) {
    console.log(v);
}
