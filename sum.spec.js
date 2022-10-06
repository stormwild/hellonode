const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds hello + world to equal 0helloworld', () => {
  expect(sum('hello', 'world')).toBe('0helloworld');
});

test('adds hello + world to equal 0hello', () => {
  expect(sum(...'hello')).toBe('0hello');
});
