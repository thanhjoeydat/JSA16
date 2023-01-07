let myInterval = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

let numberOneTriangle = "";
let h = 5;

for (let i = 1; i <= h; i++) {
  for (let k = h; k > i; k--) {
    numberOneTriangle = numberOneTriangle + " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    numberOneTriangle = numberOneTriangle + "1";
  }
  numberOneTriangle = numberOneTriangle + "\n";
}

console.log(numberOneTriangle);

function currentDate() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  console.log("Hour: " + hours);
  console.log("Minute: " + minutes);
  console.log("Second: " + second);
  console.log(date);
}

currentDate();
setInterval(currentDate, 1000)