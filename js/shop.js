import { createProductCard } from "../components/productCard/productCard.js";
import { products } from "../data/products.js";

const productContainer = document.getElementById("shop-product-container");

const productCount = document.getElementById("product-count");

const noProducts = document.getElementById("no-products");

let filteredProducts = [...products];

// ================= RENDER =================

function renderProducts() {
  productCount.textContent = filteredProducts.length;

  if (filteredProducts.length === 0) {
    productContainer.innerHTML = "";

    noProducts.hidden = false;

    return;
  }

  noProducts.hidden = true;

  productContainer.innerHTML = filteredProducts
    .map((product) => createProductCard(product))
    .join("");
}

// ================= FILTER =================

function applyFilters() {
  const selectedCategories = [
    ...document.querySelectorAll(".category-filter:checked"),
  ].map((input) => input.value);

  const selectedPrice = document.querySelector(
    'input[name="price"]:checked',
  ).value;

  const selectedRating = Number(
    document.querySelector('input[name="rating"]:checked').value,
  );

  filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    let priceMatch = true;

    if (selectedPrice === "under5000") {
      priceMatch = product.price < 5000;
    } else if (selectedPrice === "5000-10000") {
      priceMatch = product.price >= 5000 && product.price <= 10000;
    } else if (selectedPrice === "over10000") {
      priceMatch = product.price > 10000;
    }

    const ratingMatch = product.rating >= selectedRating;

    return categoryMatch && priceMatch && ratingMatch;
  });

  applySorting();
}

// ================= SORT =================

function applySorting() {
  const sort = document.getElementById("sort").value;

  if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts();
}

// ================= EVENTS =================

document.querySelectorAll(".category-filter").forEach((input) => {
  input.addEventListener("change", applyFilters);
});

document
  .querySelectorAll('input[name="price"], input[name="rating"]')
  .forEach((input) => {
    input.addEventListener("change", applyFilters);
  });

document.getElementById("sort").addEventListener("change", applyFilters);

// ================= CLEAR FILTERS =================

function clearFilters() {
  document.querySelectorAll(".category-filter").forEach((input) => {
    input.checked = false;
  });

  document.querySelector('input[name="price"][value="all"]').checked = true;

  document.querySelector('input[name="rating"][value="4"]').checked = true;

  document.getElementById("sort").value = "featured";

  filteredProducts = [...products];

  renderProducts();
}

document
  .getElementById("clear-filters")
  .addEventListener("click", clearFilters);

document.getElementById("reset-shop").addEventListener("click", clearFilters);

// Initial render

renderProducts();
