function loginToInstagram(login, password, callback) {
  console.log("Sent request to backend");
  setTimeout(() => {
    if (login === "suvonov" && password === "777") {
      return callback("Wellcome to Instagram account");
    } else {
      return callback("Oops something wrong");
    }
  }, 3000);
}

loginToInstagram("suvonov", "777", (data) => {
  console.log(data);
});
