import { getLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

document.addEventListener('DOMContentLoaded', () => {
  const cTotal = document.querySelector('#total');
  let totalAmount = 0;

  const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  console.log("Cart items:", storedItems);

  storedItems.forEach(item => {
    const price = parseFloat(item.FinalPrice);
    const quantity = item.Quantity || 1; 
    totalAmount += price * quantity;
  });

  cTotal.innerHTML = `<p class="amount">Total Amount: $${totalAmount.toFixed(2)}</p>`;
});