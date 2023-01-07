// localStorage.setItem("0", "d");
// localStorage.setItem("1", "a");
// localStorage.setItem("2", "t");
// localStorage.setItem("3", "n");

// // console.log(localStorage.key(1));

// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
// }

// let e = document.getElementById("a");
// a.innerHTML = "<div class=${class}>${s}</div> ";

let setKey = document.getElementById("setKey");
let setValue = document.getElementById("setValue");

document.getElementById("btn").addEventListener("click", () => {
  localStorage.setItem(setKey.value, setValue.value);
  setKey.value = "";
  setValue.value = "";
});
