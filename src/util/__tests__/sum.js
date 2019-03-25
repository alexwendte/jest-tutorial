const cases = require('jest-in-case');
const sum = require('../sum');

it('should sum 2 numbers', () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});

cases(
  'work for valid cases',
  ({ input, output }) => expect(sum(...input)).toBe(output),
  [
    [[1, 2], 3],
    [[2, 2], 4],
    [[3, 2], 5],
    [[5, 2], 7],
    [[9, 200], 209],
    [[15, 2], 17],
    [[16, 2], 18]
  ].map(([input, output]) => ({
    title: `${input} => ${output}`,
    input,
    output
  }))
);

cases(
  'return a helpful error for invalid cases',
  ({ input, output }) => expect(sum(...input)).toBe(output),
  [
    [[1], '2 inputs are required'],
    [[], '2 inputs are required'],
    [[1, null], '2 inputs are required'],
    [[null, 1], '2 inputs are required'],
    [[1, 'a'], 'inputs must be numbers'],
    [[1, []], 'inputs must be numbers'],
    [['a', 1], 'inputs must be numbers'],
    [[[], 1], 'inputs must be numbers']
  ].map(([input, output]) => ({
    title: `${input} => ${output}`,
    input,
    output
  }))
);
