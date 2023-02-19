let listPerson = [];
let t = JSON.parse(localStorage.getItem("listUserRegister"));
if (t == null) {
  localStorage.setItem("listUserRegister", JSON.stringify(listPerson));
  location.reload();
} else {
  let list = JSON.parse(localStorage.getItem("listUserRegister"));
  let btn = document.querySelector(".register .container button");
  btn.addEventListener("click", function () {
    let newUser = {};
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let emailInput = document.getElementById("email").value;
    let birthInput = document.getElementById("birth").value;

    let checkUsername = checkValidateUser(usernameInput);
    let checkPassword = checkValidatePassword(passwordInput);
    let checkEmail = checkValidateEmail(emailInput);
    let checkBirth = checkValidateBirth(birthInput);

    if (
      checkUsername == true &&
      checkPassword == true &&
      checkEmail == true &&
      checkBirth == true
    ) {
      newUser = {
        username: usernameInput,
        password: passwordInput,
        email: emailInput,
        birth: birthInput,
      };
      list.push(newUser);
      localStorage.setItem("listUserRegister", JSON.stringify(list));

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("email").value = "";
      document.getElementById("birth").value = "";
      alert("Tạo tài khoản thành công!!");
    }
  });
}

function checkValidateUser(userAccount) {
  if (userAccount == "") {
    alert("Thiếu tên tài khoản kìa");
    return false;
  }

  let listUser = JSON.parse(localStorage.getItem("listUserRegister"));
  for (let i = 0; i < listUser.length; i++) {
    if (userAccount == listUser[i].username) {
      alert("Có người dùng tên này rồi, suy nghĩ thêm đê");
      return false;
    }
  }

  return true;
}

function checkValidateEmail(userAccount) {
  if (userAccount == "") {
    alert("Uả, sao email lại bỏ trống thế kia ");
    return false;
  }
  let listUser = JSON.parse(localStorage.getItem("listUserRegister"));
  for (let i = 0; i < listUser.length; i++) {
    if (userAccount == listUser[i].email) {
      alert("Làm sao có chuyện 2 tài khoản cùng chung email được");
      return false;
    }
  }

  return true;
}

function checkValidatePassword(userPassword) {
  if (userPassword == "") {
    alert("Trời, thích bị hack tài khoản vậy sao");
    return false;
  }

  return true;
}

function checkValidateBirth(birthInput) {
  if (birthInput == "") {
    alert("Đến ngày sinh nhật còn không nhớ");
    return false;
  }

  return true;
}
