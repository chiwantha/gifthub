import {
  getCartProducts,
  getCartSummary,
  clearCart,
  formatPrice,
} from "./cart.js";

const checkoutItems = document.getElementById("checkout-items");

const checkoutSubtotal = document.getElementById("checkout-subtotal");

const checkoutDelivery = document.getElementById("checkout-delivery");

const checkoutDiscount = document.getElementById("checkout-discount");

const checkoutDiscountRow = document.getElementById("checkout-discount-row");

const checkoutTotal = document.getElementById("checkout-total");

const placeOrderButton = document.getElementById("place-order");

const placeOrderText = document.getElementById("place-order-text");

const cardForm = document.getElementById("card-form");

const orderSuccess = document.getElementById("order-success");

const checkoutSection = document.querySelector(".checkout-section");

const checkoutHeader = document.querySelector(".checkout-header");

const cartProducts = getCartProducts();

if (cartProducts.length === 0) {
  window.location.href = "cart.php";
}

function renderOrderItems() {
  checkoutItems.innerHTML = cartProducts
    .map((product) => {
      return `
                    <div class="checkout-item">

                        <div class="checkout-item-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}">

                            <span>
                                ${product.quantity}
                            </span>

                        </div>


                        <div class="checkout-item-info">

                            <strong>
                                ${product.name}
                            </strong>

                            <span>
                                ${formatPrice(product.price)}
                            </span>

                        </div>


                        <strong class="checkout-item-total">

                            ${formatPrice(product.itemTotal)}

                        </strong>

                    </div>
                `;
    })
    .join("");
}

function renderSummary() {
  const summary = getCartSummary();

  checkoutSubtotal.textContent = formatPrice(summary.subtotal);

  checkoutDelivery.textContent =
    summary.delivery === 0 ? "FREE" : formatPrice(summary.delivery);

  checkoutTotal.textContent = formatPrice(summary.total);

  if (summary.discount > 0) {
    checkoutDiscountRow.hidden = false;

    checkoutDiscount.textContent = `- ${formatPrice(summary.discount)}`;
  }
}

const paymentMethods = document.querySelectorAll(
  'input[name="payment-method"]',
);

paymentMethods.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "card" && radio.checked) {
      cardForm.hidden = false;
    } else {
      cardForm.hidden = true;
    }
  });
});

function validateCustomerDetails() {
  const requiredFields = [
    "first-name",

    "last-name",

    "email",

    "phone",

    "address",

    "city",

    "province",
  ];

  for (const fieldId of requiredFields) {
    const field = document.getElementById(fieldId);

    if (!field.value.trim()) {
      field.focus();

      alert("Please complete all delivery information.");

      return false;
    }
  }

  return true;
}

function validateCard() {
  const cardNumber = document.getElementById("card-number").value.trim();

  const cardName = document.getElementById("card-name").value.trim();

  const expiry = document.getElementById("expiry").value.trim();

  const cvv = document.getElementById("cvv").value.trim();

  if (!cardNumber || !cardName || !expiry || !cvv) {
    alert("Please complete the card details.");

    return false;
  }

  return true;
}

function generateOrderId() {
  const random = Math.floor(100000 + Math.random() * 900000);

  return `GH-${random}`;
}

placeOrderButton.addEventListener("click", () => {
  // ================= CUSTOMER =================

  if (!validateCustomerDetails()) {
    return;
  }

  // ================= PAYMENT =================

  const selectedPayment = document.querySelector(
    'input[name="payment-method"]:checked',
  ).value;

  if (selectedPayment === "card") {
    if (!validateCard()) {
      return;
    }
  }

  // ================= LOADING =================

  placeOrderButton.disabled = true;

  placeOrderText.textContent =
    selectedPayment === "card" ? "Processing Payment..." : "Placing Order...";

  // ================= DEMO =================

  setTimeout(() => {
    const orderId = generateOrderId();

    document.getElementById("order-id").textContent = orderId;

    // Clear cart

    clearCart();

    // Hide checkout

    checkoutSection.hidden = true;

    checkoutHeader.hidden = true;

    // Show success

    orderSuccess.hidden = false;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 1200);
});

renderOrderItems();

renderSummary();
