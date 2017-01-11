function unicodeLength(str) {
    // Split by surrogate pair indicator
    const num = str.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1;
    return str.length - num;
}

const str = String.fromCodePoint(0x20B9F);

console.log(str.length);
console.log(unicodeLength(str));
