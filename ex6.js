function filterOdd(arr) {
  return arr.filter((number) => number % 3 === 0);
}
console.log(filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function filterEven(arr) {
  return arr.filter((number) => number % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
