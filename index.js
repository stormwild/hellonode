fs = require('fs');

fs.writeFile('helloworld.txt', 'Hello World', (err) => { if (err) throw err; console.log('Write completed') });

console.log("Hello world")

function sum(...theArgs) {
    console.log(theArgs.length)
    console.log(theArgs)
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}


sum(1, 2, 3)

sum(1, 2, 3, 4)

sum('hello') // [ 'hello' ] length 1

sum('hello', 'world') // [ 'hello', 'world' ] length 2

sum(...'hello') // [ 'h', 'e', 'l', 'l', 'o' ] length 5