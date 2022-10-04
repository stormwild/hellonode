fs = require('fs');

fs.writeFile('helloworld.txt', 'Hello World', (err) => { if (err) throw err; console.log('Write completed') });

console.log("Hello world")

