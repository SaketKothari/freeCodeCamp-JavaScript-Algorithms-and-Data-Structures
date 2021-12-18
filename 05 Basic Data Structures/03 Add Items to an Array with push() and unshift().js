function mixedNumbers(arr) {
  arr.push(7,"VIII", 9);
  arr.unshift('I', 2, 'three');
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));