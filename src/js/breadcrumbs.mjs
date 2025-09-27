document.addEventListener('DOMContentLoaded',() =>{
    const breadcrumbContainer = document.getElementById('breadcrumb-container');

    const urlPath = window.location.pathname;
    const categoryName = 'Tents'; 
    const productCount = 24; 

    if (urlPath === '/' || urlPath === '/index.html') {
      breadcrumbContainer.innerHTML = 'Home';
    } else if (urlPath.includes('/product_pages/index.html')) {
      // Product page
      breadcrumbContainer.innerHTML = `
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">${categoryName}</li>
          </ol>
        </nav>
      `;
    } else if (urlPath.includes('/category.html')) {
      // Product list page
      breadcrumbContainer.innerHTML = `
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">${categoryName} &rarr; (${productCount} items)</li>
          </ol>
        </nav>
      `;
    } else {
      // Other pages
      breadcrumbContainer.innerHTML = '';
    }
})