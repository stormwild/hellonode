function sum(...theArgs) {
    // console.log(theArgs.length)
    // console.log(theArgs)
    console.log(`${theArgs} ${theArgs.length}`)
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

module.exports = sum;