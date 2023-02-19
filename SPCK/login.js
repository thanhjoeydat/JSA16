let listPerson = [];
let t = JSON.parse(localStorage.getItem("listUserLogin"));
if (t == null) {
  localStorage.setItem("listUserLogin", JSON.stringify(listPerson));
  location.reload();
} else {
  let list = JSON.parse(localStorage.getItem("listUserLogin"));
  let btn = document.querySelector(".login button");
  btn.addEventListener("click", function () {
    let newUser = {};
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let checkUsername = checkValidateUser(usernameInput);
    let checkPassword = checkPassword1(passwordInput);

    if (checkUsername == true && checkPassword == true) {
      newUser = {
        username: usernameInput,
        password: passwordInput,
      };
      list.push(newUser);
      localStorage.setItem("listUserLogin", JSON.stringify(list));

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      alert("Ô thành viên mới nè, hé lô");
    }
  });
}
function checkValidateUser(userAccount) {
  if (userAccount == "") {
    alert("Nhập tên người dùng vào đê");
    return false;
  }

  let listUser = JSON.parse(localStorage.getItem("listUserLogin"));
  for (let i = 0; i < listUser.length; i++) {
    if (userAccount == listUser[i].username) {
      alert("Định giả mạo ai à, nhập tên người dùng khác đê");
      return false;
    }
  }

  return true;
}

function checkPassword1(userPassword) {
  if (userPassword == "") {
    alert("Để không hack tự chịu nhá, đặt mật khẩu đê");
    return false;
  }
  return true;
}
