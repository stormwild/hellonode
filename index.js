fs = require('fs');

const sum = require('./sum')

fs.writeFile('helloworld.txt', 'Hello World', (err) => { if (err) throw err; console.log('Write completed') });

console.log("Hello world")




let result1 = sum(1, 2, 3)
console.log(result1)

let result2 = sum(1, 2, 3, 4)
console.log(result2)

let result3 = sum('hello') // [ 'hello' ] length 1
console.log(result3)

let result4 = sum('hello', 'world') // [ 'hello', 'world' ] length 2
console.log(result4)

let result5 = sum(...'hello') // [ 'h', 'e', 'l', 'l', 'o' ] length 5
console.log(result5)

