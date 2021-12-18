function popShift(arr) {
  let popped = arr.pop('complete');
  let shifted = arr.shift('challenge'); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));