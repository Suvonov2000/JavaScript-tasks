function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(8));
console.log(isEven(7));

function sum(a, b, c) {
  return a * b + c;
}
console.log(sum(23, 45, 87));

function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([10, 20, 30]));

function sumArray(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const user = {
  name: `Suvonov`,
  surName: `Suvnov`,
  getFullName: function () {
    return `${this.name} ${this.surName}`;
  },
};
console.log(user.getFullName());
