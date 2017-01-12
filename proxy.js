const data = {red: '赤色', yellow: '黄色'};
const proxy = new Proxy(data, {
  get(target, prop) {
    return prop in target ? target[prop] : '?';
  }
});

console.log(proxy.red);
console.log(proxy.nothing);
