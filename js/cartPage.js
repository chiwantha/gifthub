import {
  getCartProducts,
  getCartSummary,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  formatPrice,
} from "./cart.js";

const cartContent = document.getElementById("cart-content");

const cartItemsContainer = document.getElementById("cart-items");

const cartItemCount = document.getElementById("cart-item-count");

const cartSubtotal = document.getElementById("cart-subtotal");

const cartDelivery = document.getElementById("cart-delivery");

const cartDiscount = document.getElementById("cart-discount");

const cartTotal = document.getElementById("cart-total");

const emptyCart = document.getElementById("empty-cart");

const discountRow = document.getElementById("discount-row");

const promoInput = document.getElementById("promo-code");

const promoMessage = document.getElementById("promo-message");

const applyPromoButton = document.getElementById("apply-promo");

const checkoutButton = document.getElementById("checkout-button");

let activePromoCode = "";

function renderCart() {
  const cartProducts = getCartProducts();

  // ================= EMPTY CART =================

  if (cartProducts.length === 0) {
    cartContent.hidden = true;

    emptyCart.hidden = false;

    return;
  }

  // ================= HAS ITEMS =================

  cartContent.hidden = false;

  emptyCart.hidden = true;

  // ================= RENDER ITEMS =================

  cartItemsContainer.innerHTML = cartProducts.map(createCartItem).join("");

  // ================= UPDATE SUMMARY =================

  updateSummary();
}

function createCartItem(product) {
  return `
    <article
      class="cart-item"
      data-product-id="${product.id}">


      <!-- IMAGE -->

      <a
        href="product.php?id=${product.id}"
        class="cart-item-image">

        <img
          src="${product.image}"
          alt="${product.name}">

      </a>


      <!-- INFORMATION -->

      <div class="cart-item-info">

        <span class="cart-item-category">

          ${product.category}

        </span>


        <a
          href="product.php?id=${product.id}"
          class="cart-item-name">

          ${product.name}

        </a>


        <span class="cart-item-price">

          ${formatPrice(product.price)}

        </span>


        <!-- ACTIONS -->

        <div class="cart-item-actions">


          <!-- QUANTITY -->

          <div class="cart-quantity">

            <button
              type="button"
              class="quantity-minus"
              data-id="${product.id}">

              −

            </button>


            <span>

              ${product.quantity}

            </span>


            <button
              type="button"
              class="quantity-plus"
              data-id="${product.id}">

              +

            </button>

          </div>


          <!-- REMOVE -->

          <button
            type="button"
            class="remove-item"
            data-id="${product.id}">

            Remove

          </button>


        </div>

      </div>


      <!-- ITEM TOTAL -->

      <div class="cart-item-total">

        ${formatPrice(product.itemTotal)}

      </div>


    </article>
  `;
}

function updateSummary() {
  const summary = getCartSummary(activePromoCode);

  cartItemCount.textContent = `${summary.itemCount} ${
    summary.itemCount === 1 ? "item" : "items"
  }`;

  cartSubtotal.textContent = formatPrice(summary.subtotal);

  if (summary.delivery === 0) {
    cartDelivery.textContent = "FREE";
  } else {
    cartDelivery.textContent = formatPrice(summary.delivery);
  }

  cartDiscount.textContent = `- ${formatPrice(summary.discount)}`;

  discountRow.hidden = summary.discount === 0;

  cartTotal.textContent = formatPrice(summary.total);
}

cartItemsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.id);

  if (!productId) {
    return;
  }

  // ================= DECREASE =================

  if (button.classList.contains("quantity-minus")) {
    decreaseQuantity(productId);

    renderCart();

    return;
  }

  // ================= INCREASE =================

  if (button.classList.contains("quantity-plus")) {
    increaseQuantity(productId);

    renderCart();

    return;
  }

  // ================= REMOVE =================

  if (button.classList.contains("remove-item")) {
    removeFromCart(productId);

    renderCart();

    return;
  }
});

applyPromoButton.addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();

  if (!code) {
    activePromoCode = "";

    promoMessage.textContent = "Please enter a promo code.";

    promoMessage.className = "promo-error";

    renderCart();

    return;
  }

  const summary = getCartSummary(code);

  if (summary.discount > 0) {
    activePromoCode = code;

    promoMessage.textContent = `Promo code applied! You saved ${formatPrice(
      summary.discount,
    )}.`;

    promoMessage.className = "promo-success";
  } else {
    activePromoCode = "";

    promoMessage.textContent = "Invalid promo code.";

    promoMessage.className = "promo-error";
  }

  renderCart();
});

checkoutButton.addEventListener("click", () => {
  const cartProducts = getCartProducts();

  if (cartProducts.length === 0) {
    return;
  }

  window.location.href = "checkout.php";
});

window.addEventListener("cartUpdated", () => {
  renderCart();
});

renderCart();
