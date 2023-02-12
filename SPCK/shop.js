let btn = document.querySelectorAll("button");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    let btnItem = event.target;
    let product = btnItem.parentElement;
    let productimg = product.querySelector("img").src;
    let productname = product.querySelector("h4").innerText;
    let productprice = product.querySelector(".priceitem").innerText;
    Addcart(productprice, productimg, productname);
  });
});
function Addcart(productprice, productimg, productname) {
  let addtr = document.createElement("tr");
  let cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    let productT = document.querySelectorAll(".title");
    if (productT[i].innerHTML == productname) {
      alert("Sản phẩm đã có trong giỏ hàng");
      return;
    }
  }
  let trcontent =
    '<tr><td style="display: flex; align-items: center" class="tdbim"><img class="picbim" src="' +
    productimg +
    '" /><p class ="title">' +
    productname +
    "</p></td><td><i><span><b>" +
    productprice +
    '</b></span><b><sup>đ</sup></b></i></td><td><input style="width: 50px; outline: none"class="inputbim"type="number"value="1"min="1"/></td><td style="cursor: pointer" class="deletebim">Xóa</td></tr>';
  addtr.innerHTML = trcontent;
  let cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  cartTotal();
  deleteCart();
}
function cartTotal() {
  let cartItem = document.querySelectorAll("tbody tr");
  let total1C = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let inputvalue = cartItem[i].querySelector("input").value;
    let productprice = cartItem[i].querySelector("span").innerText;
    let total1A = inputvalue * productprice * 1000;
    total1C = total1C + total1A;
    // total1D = total1C.toLocaleString("de-DE");
  }
  let cartTotalA = document.querySelector(".totalcart span");
  let cartPrice = document.querySelector(".cart-icon span");
  cartTotalA.innerHTML = total1C.toLocaleString("de-DE");
  cartPrice.innerHTML = total1C.toLocaleString("de-DE");
  inputchange();
}

function deleteCart() {
  let cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    let productT = document.querySelectorAll(".deletebim");
    productT[i].addEventListener("click", function (event) {
      let cartDelete = event.target;
      let cartItem2 = cartDelete.parentElement;
      cartItem2.remove();
      cartTotal();
    });
  }
}
function inputchange() {
  let cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    let inputvalue = cartItem[i].querySelector("input");
    inputvalue.addEventListener("change", function () {
      cartTotal();
    });
  }
}

let cartbtn = document.querySelector(".fa-solid fa-x");
let cartshow = document.querySelector(".fa-solid fa-cart-shopping");
