import { getLocalStorage, getParam, setLocalStorage} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
loadHeaderTemplate();
loadFooterTemplate();

getParam(param);
async function fetchProducts(category) {
  const response = await fetch(`/products/search/${category}`);
  if (!response.ok) {
    console.error("Failed to fetch products");
    return [];
  }
  const products = await response.json();
  return products;
}

// Function to display products
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; 

  if (products.length === 0) {
    container.innerHTML = '<p>No products found for this category.</p>';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';


    const link = document.createElement('a');
    link.href = `/product/id.html?id=${product.id}`;

    // Product image
    const img = document.createElement('img');
    img.src = product.imageUrl; 
    img.alt = product.name;

    // Product name or title
    const title = document.createElement('h3');
    title.textContent = product.name;

    link.appendChild(img);
    link.appendChild(title);
    productDiv.appendChild(link);

    container.appendChild(productDiv);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const category = getQueryParam('category');

  // Set the page title
  document.getElementById('category-title').textContent = category ? category.replace('-', ' ').toUpperCase() : 'Products';

  if (category) {
    const products = await fetchProducts(category);
    displayProducts(products);
  } else {
    document.getElementById('product-container').innerHTML = '<p>Please select a category.</p>';
  }
});

const dataSource = new ProductData("tents");
const productId = getParam('product');
console.log(productId);

const product = new ProductDetails(productId, dataSource);
product.init();

console.log(dataSource.findProductById(productId));
