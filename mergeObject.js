function mergeObject(object1, object2) {
  return { ...object1, ...object2 };
}
console.log(mergeObject({ a: 1, b: 2 }, { c: 3, d: 4 }));
