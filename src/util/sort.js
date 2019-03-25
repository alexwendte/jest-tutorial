const sort = arr => {
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    let j = i - 1;
    while (cur < arr[j]) {
      arr[j + 1] = arr[j];
      arr[j] = cur;
      j -= 1;
    }
  }
  return arr;
};

module.exports = sort;
