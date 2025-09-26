export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key) || [];
    this.calculateItemSubTotal();
    this.calculateOrderTotal();
  }

  calculateItemSubTotal() {
    // Assuming each item in list has a 'price' and 'quantity' property
    this.itemTotal = this.list.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  calculateOrderTotal() {
    // Example tax rate: 8%
    this.tax = this.itemTotal * 0.08;

    // Example shipping estimate (could be dynamic)
    this.shipping = 5.00; // flat rate or calculated based on items

    this.orderTotal = this.itemTotal + this.tax + this.shipping;

    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // Select elements within the order summary section
    const subtotalElement = document.querySelector(`${this.outputSelector} #subtotal`);
    const taxElement = document.querySelector(`${this.outputSelector} #tax`);
    const shippingElement = document.querySelector(`${this.outputSelector} #shipping`);
    const totalElement = document.querySelector(`${this.outputSelector} #orderTotal`);

    if (subtotalElement) subtotalElement.innerText = `$${this.itemTotal.toFixed(2)}`;
    if (taxElement) taxElement.innerText = `$${this.tax.toFixed(2)}`;
    if (shippingElement) shippingElement.innerText = `$${this.shipping.toFixed(2)}`;
    if (totalElement) totalElement.innerText = `$${this.orderTotal.toFixed(2)}`;
  }
}

// Helper function to get data from local storage
function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}