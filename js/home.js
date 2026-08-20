import { createProductCard } from "../components/productCard/productCard.js";
import { products } from "../data/products.js";

const productContainer = document.getElementById("product-container");

productContainer.innerHTML = products
  .map((product) => createProductCard(product, "pages/"))
  .join("");
