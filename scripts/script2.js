function multiplitacion(myNumber) {
  document.write("<p class='test'>" + myNumber * 5 + "</p>");
}

function taxesCalculation() {
  var product = prompt("Enter the product's name: ");
  var price = Number(prompt("Enter the price: "));
  var qty = Number(prompt("Enter the qty: "));
  const taxes = 1.08;
  var subtotal = price * qty;
  var total = subtotal * taxes;

  // document.write(product);
  // document.write(subtotal);
  // document.write(total);

  document.getElementById("products").innerHTML += `
  <div class="products">  
  <p>Name: ${product}</p>
    <p>Subtotal: ${subtotal}</p>
    <p>Total: ${total}</p>
  </div>
    `;
}
