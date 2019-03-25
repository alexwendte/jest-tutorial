const sum = (a, b) => {
  if (a === null || a === undefined || b === null || b === undefined)
    return '2 inputs are required';
  if (typeof a !== 'number' || typeof b !== 'number')
    return 'inputs must be numbers';

  return a + b;
};

module.exports = sum;
