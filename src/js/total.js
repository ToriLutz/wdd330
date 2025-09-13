import { getLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

document.addEventListener('DOMContentLoaded', () => {
  const cTotal = document.querySelector('#total');
  let cartTotal = 0;

  const cartItems = JSON.parse(localStorage.getItem("product")) || [];
  cartItems.forEach(product => {
    console.log("Processing product:", product);
    console.log("FinalPrice:", product.FinalPrice);
    cartTotal += parseFloat(product.FinalPrice);
  });

  console.log("Total:", cartTotal);

  cTotal.innerHTML = `<p>Total Amount: $${cartTotal.toFixed(2)}</p>`;
});