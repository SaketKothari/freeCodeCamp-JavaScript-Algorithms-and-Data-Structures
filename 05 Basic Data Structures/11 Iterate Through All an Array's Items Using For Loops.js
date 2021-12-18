function filteredArray(arr, elem) {
  let newArr = [];
  for(let i=0; i<arr.length; i++) {
    //Checks every parameter for the element and if is NOT there   continues the code
    if(arr[i].indexOf(elem) == -1)
    //Inserts the element of the array in the new filtered array
      newArr.push(arr[i]);
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));