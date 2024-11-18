fetch("https://api.sampleapis.com/coffee/hot")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
