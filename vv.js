function factorial(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
}
console.log(factorial(5));

function fibonacci(number) {
  let result = [0, 1];
  while (result.length < number) {
    prev = result[result.length - 1];
    prev2 = result[result.length - 2];

    result.push(prev + prev2);
  }
  return result;
}
console.log(fibonacci(5));

function capitalLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, 11);
}
console.log(capitalLetter(`hello`));

const filterEven = (arr) => {
  return arr.filter((number) => number % 2 === 0);
};
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function arrayInterSection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
console.log(arrayInterSection([1, 2, 3], [2, 3, 4]));

function flattenArray(array) {
  return array.flat(Infinity);
}
console.log(flattenArray([1, [2, 3], [4, 5]]));

function mergeObject(object1, object2) {
  return { ...object1, ...object2 };
}
console.log(mergeObject({ a: 1, b: 2 }, { c: 3, d: 4 }));
