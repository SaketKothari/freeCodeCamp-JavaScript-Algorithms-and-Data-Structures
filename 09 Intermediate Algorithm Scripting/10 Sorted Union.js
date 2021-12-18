function uniteUnique(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);