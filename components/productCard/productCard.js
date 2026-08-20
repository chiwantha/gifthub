import { addToCart } from "../../js/cart.js";

export function createProductCard(product, basePath = "") {
  return `
    <article class="product-card">

      <div class="product-image">

        ${
          product.badge
            ? `
              <span class="product-badge">
                ${product.badge}
              </span>
            `
            : ""
        }

        <button
          type="button"
          class="wishlist-button"
          data-wishlist-id="${product.id}">

          ♡

        </button>

        <a
          href="${basePath}product.php?id=${product.id}">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

        </a>

      </div>


      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>


        <a
          href="${basePath}product.php?id=${product.id}"
          class="product-name-link">

          <h3 class="product-name">
            ${product.name}
          </h3>

        </a>


        <div class="product-rating">

          <span>★</span>

          <span>
            ${product.rating}
          </span>

        </div>


        <div class="product-bottom">

          <span class="product-price">

            LKR
            ${product.price.toLocaleString()}

          </span>


          <button
            type="button"
            class="add-cart"
            data-product-id="${product.id}">

            Add to Cart

          </button>

        </div>

      </div>

    </article>
  `;
}

// =====================================================
// ADD TO CART CLICK
// =====================================================

document.addEventListener("click", function (event) {
  const button = event.target.closest(".add-cart");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.productId);

  if (!productId) {
    console.error("GiftHub: Invalid product ID");

    return;
  }

  const success = addToCart(productId, 1);

  if (!success) {
    return;
  }

  // Button feedback

  const originalText = button.textContent;

  button.textContent = "Added ✓";

  button.classList.add("added");

  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;

    button.classList.remove("added");

    button.disabled = false;
  }, 1200);
});
