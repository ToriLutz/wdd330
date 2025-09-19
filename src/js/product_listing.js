import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadFooterTemplate, loadHeaderTemplate } from "./utils.mjs";

loadFooterTemplate();
loadHeaderTemplate();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();
