var BBcartItems = JSON.parse(localStorage.getItem("BBcartItems"));
console.log("BBcartItems:", BBcartItems);
displayItem(BBcartItems);

function displayItem(BBcartItems) {
  //chech if remove button can work
  document.querySelector("#dis").innerHTML = "";

  BBcartItems.map(function (item) {
    var img = document.createElement("img");
    img.setAttribute("src", item.img);

    var h1 = document.createElement("h1");
    h1.textContent = item.brand;

    var h3 = document.createElement("h3");
    h3.textContent = item.discount;

    var h2 = document.createElement("h2");
    h2.textContent = item.price;

    var h4 = document.createElement("h4");
    h4.textContent = item.category;

    var divPush = document.createElement("div");
    divPush.setAttribute("class", "divPush");

    var hr = document.createElement("hr");
    hr.textContent = item.none;

    divPush.append(img, h1, h3, h4, h2, hr);

    document.querySelector("#dis").append(divPush);

    // document.querySelector("#displayitem").append(img , h1, h3, h2,btn, hr);
  });
}

//total calculate fumction
var total = BBcartItems.reduce(function (startingValue, currentValue) {
  return startingValue + Number(currentValue.price);
}, 0);

localStorage.setItem("totalAmount", JSON.stringify(total));

document.querySelector(
  "#total"
).innerHTML = `<h1 id="totalDisplayDiv">total cost is $${total}</h1>
                    <button onClick="goToCheckout()" id="checkOutButton">Check Out</button>
                    <button onClick="removeAllItems()" id="removeItems">removeAll Items</button>  `;

function goToCheckout() {
  alert("SignIN first");
  window.location.href = "signUP.html";
  //   window.location.href="checkout.html"
}

function removeAllItems() {
  localStorage.removeItem("BBcartItems");
}
