function getIndexToIns(arr, num) {
// sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);