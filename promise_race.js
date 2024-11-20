const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "Hello")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "World")
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
