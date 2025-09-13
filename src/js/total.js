import { getLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

document.addEventListener('DOMContentLoaded', () => {
  const cTotal = document.querySelector('#total');
  let totalAmount = 0;

  const storedItems = JSON.parse(localStorage.getItem('so-cart')) || [];
  console.log("Cart items:", storedItems);

  storedItems.forEach(item => {
    const price = parseFloat(item.FinalPrice);
    const quantity = item.Quantity || 1; 
    totalAmount += price * quantity;

  });
if (totalAmount === 0){
        cTotal.classList.add ('hide');
    }
else {
        cTotal.classList.remove('hide');
};

  cTotal.innerHTML = `<p class="amount">Total Amount: $${totalAmount.toFixed(2)}</p>`;
});