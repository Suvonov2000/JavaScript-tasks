function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}
console.log(factorial(5));

function fibonacci(number) {
  let result = [0, 1];
  while (result.length < number) {
    prev1 = result[result.length - 1];
    prev2 = result[result.length - 2];
    result.push(prev1 + prev2);
  }
  return result;
}
console.log(fibonacci(5));

function capitalLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalLetter(`hello`));

function filterEven(arr) {
  return arr.filter((number) => number % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function arrayInterSection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
console.log(arrayInterSection([1, 2, 3], [2, 3, 4]));
