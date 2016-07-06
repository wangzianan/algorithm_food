function slasher(arr, howMany) {
  // it doesn't always pay to be first
  //return the remain elements of the array
  arr.splice(0,howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 2));