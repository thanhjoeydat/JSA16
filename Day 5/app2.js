let username = document.getElementById("input1");
let password = document.getElementById("input2");
let user = [];
document.querySelector("btn").addEventListener("click", function () {
  let eachuser = {
    username: username.value,
    password: password.value,
  };
  user.push(eachuser);
});
