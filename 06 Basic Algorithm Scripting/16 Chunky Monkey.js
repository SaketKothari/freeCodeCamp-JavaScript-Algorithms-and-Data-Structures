function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    // we push to the newArr array using arr.splice(0, size).
    // For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);