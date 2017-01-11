const map = new Map();
map.set('apple', 'りんご');
map.set('banana', 'バナナ');
map.set('grape', 'ぶどう');

console.log(map.size);
console.log(map.get('apple'));
console.log(map.has('orange'));

for (let [key, value] of map) {
    console.log(key, value);
}
