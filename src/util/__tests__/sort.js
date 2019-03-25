const sort = require('../sort');

it('should be in the right order', () => {
  const arr = [2, 1];
  const result = sort(arr);
  expect(result).toEqual([1, 2]);
});
