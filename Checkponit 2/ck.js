let menu = ["rau xào", "thịt luộc", "gà rán"];
let check = 0;
if (localStorage.getItem("menu") == null) {
  localStorage.setItem("menu", JSON.stringify(menu));
} else {
  menu = JSON.parse(localStorage.getItem("menu"));
}

// create
let c1text = document.getElementById("Ctext");
let c1check = document.getElementById("C1check");
c1check.style.color = "red";

function CreateFunction() {
  menu.push(c1text.value);
  localStorage.setItem("menu", JSON.stringify(menu));
  c1check.innerHTML = "Tạo thành công!";
}

// read
let f1check = document.getElementById("F1check");
f1check.style.color = "red";

function ReadFunction() {
  f1check.innerHTML = menu.join(", ");
}

// update
let u1text = document.getElementById("U1text");
let u2text = document.getElementById("U2text");
let ucheck = document.getElementById("Ucheck");
ucheck.style.color = "red";

function UpdateFunction() {
  menu.push(u2text.value);
  menu.push(u1text.value);
  localStorage.setItem("menu", JSON.stringify(menu));
  ucheck.innerHTML = "Thêm thành công!";
}
