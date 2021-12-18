function steamrollArray(arr) {
  const flat = [].concat(...arr);
  // Array.some() method to find out if the new array contains an array still
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);