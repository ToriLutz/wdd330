import ProductData from "./ProductData.mjs";

const category = 'tents'; 
const dataSource = new ProductData(category);

document.addEventListener('DOMContentLoaded', () => {
  dataSource.getData().then((products) => {
    displayProducts(products);
  });
});

function displayProducts(products) {
  const container = document.getElementById('product-list');
  

  products.forEach((product) => {

     if (!product.Image || product.Image.trim() === "") {
    return;
  }
    // Create list item
    const li = document.createElement('li');
    li.className = 'product-card';

    // Create link
    const a = document.createElement('a');
    a.href = `product_pages/?product=${product.Id}`; 

    // Image
    const img = document.createElement('img');
    img.src = product.Image; 
    img.alt = product.NameWithoutBrand;

    // Brand
    const brand = document.createElement('h3');
    brand.className = 'card__brand';
    brand.textContent = product.Brand.Name; 

    // Name
    const name = document.createElement('h2');
    name.className = 'card__name';
    name.textContent = product.NameWithoutBrand;

    // Price
    const price = document.createElement('p');
    price.className = 'product-card__price';
    price.textContent = product.FinalPrice;

    // Append elements
    a.appendChild(img);
    a.appendChild(brand);
    a.appendChild(name);
    a.appendChild(price);
    li.appendChild(a);
    container.appendChild(li);

  });
}
