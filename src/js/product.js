import { getLocalStorage, getParam, setLocalStorage} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
loadHeaderTemplate();
loadFooterTemplate();

const dataSource = new ProductData("tents");
const productId = getParam('product');
console.log(productId);

const product = new ProductDetails(productId, dataSource);
product.init();

console.log(dataSource.findProductById(productId));
