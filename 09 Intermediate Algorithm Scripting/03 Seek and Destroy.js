function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Using spread operator to retrieve the arguments.
// Return the filtered array, using includes().

