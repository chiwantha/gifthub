import { products } from "../data/products.js";

// =====================================================
// CONFIGURATION
// =====================================================

const CART_KEY = "gifthub_cart";

const FREE_DELIVERY_LIMIT = 10000;

const DELIVERY_FEE = 350;

const PROMO_CODES = {
  GIFTHUB10: 1000,
};

// =====================================================
// GET CART
// =====================================================

export function getCart() {
  const savedCart = localStorage.getItem(CART_KEY);

  if (!savedCart) {
    return [];
  }

  try {
    const cart = JSON.parse(savedCart);

    return Array.isArray(cart) ? cart : [];
  } catch (error) {
    console.error("GiftHub: Failed to load cart", error);

    return [];
  }
}

// =====================================================
// SAVE CART
// =====================================================

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  // Tell other components that cart changed

  window.dispatchEvent(
    new CustomEvent("cartUpdated", {
      detail: {
        cart: cart,
      },
    }),
  );
}

// =====================================================
// ADD TO CART
// =====================================================

export function addToCart(productId, quantity = 1) {
  const product = products.find((product) => product.id === productId);

  if (!product) {
    console.error(`GiftHub: Product ${productId} not found`);

    return false;
  }

  if (quantity <= 0) {
    return false;
  }

  const cart = getCart();

  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }

  saveCart(cart);

  return true;
}

// =====================================================
// REMOVE FROM CART
// =====================================================

export function removeFromCart(productId) {
  const cart = getCart();

  const updatedCart = cart.filter((item) => item.productId !== productId);

  saveCart(updatedCart);

  return updatedCart;
}

// =====================================================
// UPDATE CART QUANTITY
// =====================================================

export function updateCartQuantity(productId, quantity) {
  const cart = getCart();

  const item = cart.find((item) => item.productId === productId);

  if (!item) {
    return cart;
  }

  // If quantity becomes zero,
  // remove the product.

  if (quantity <= 0) {
    return removeFromCart(productId);
  }

  item.quantity = quantity;

  saveCart(cart);

  return cart;
}

// =====================================================
// INCREASE QUANTITY
// =====================================================

export function increaseQuantity(productId) {
  const cart = getCart();

  const item = cart.find((item) => item.productId === productId);

  if (!item) {
    return cart;
  }

  item.quantity += 1;

  saveCart(cart);

  return cart;
}

// =====================================================
// DECREASE QUANTITY
// =====================================================

export function decreaseQuantity(productId) {
  const cart = getCart();

  const item = cart.find((item) => item.productId === productId);

  if (!item) {
    return cart;
  }

  if (item.quantity <= 1) {
    return removeFromCart(productId);
  }

  item.quantity -= 1;

  saveCart(cart);

  return cart;
}

// =====================================================
// CLEAR CART
// =====================================================

export function clearCart() {
  saveCart([]);
}

// =====================================================
// GET CART ITEM COUNT
// =====================================================
//
// Example:
//
// Product A × 2
// Product B × 3
//
// Result = 5
//

export function getCartItemCount() {
  const cart = getCart();

  return cart.reduce((total, item) => total + item.quantity, 0);
}

// =====================================================
// GET CART PRODUCT COUNT
// =====================================================
//
// Number of different products.
//
// Example:
//
// Product A × 2
// Product B × 3
//
// Result = 2
//

export function getCartProductCount() {
  const cart = getCart();

  return cart.length;
}

// =====================================================
// GET CART PRODUCTS
// =====================================================
//
// Combines:
//
// cart data
// +
// products data
//
// Example:
//
// {
//   id: 1,
//   name: "...",
//   price: 4990,
//   quantity: 2
// }
//

export function getCartProducts() {
  const cart = getCart();

  return cart
    .map((cartItem) => {
      const product = products.find(
        (product) => product.id === cartItem.productId,
      );

      if (!product) {
        return null;
      }

      return {
        ...product,

        quantity: cartItem.quantity,

        itemTotal: product.price * cartItem.quantity,
      };
    })
    .filter(Boolean);
}

// =====================================================
// GET SUBTOTAL
// =====================================================

export function getCartSubtotal() {
  const cartProducts = getCartProducts();

  return cartProducts.reduce((total, product) => total + product.itemTotal, 0);
}

// =====================================================
// GET DELIVERY FEE
// =====================================================

export function getDeliveryFee() {
  const subtotal = getCartSubtotal();

  if (subtotal === 0) {
    return 0;
  }

  if (subtotal >= FREE_DELIVERY_LIMIT) {
    return 0;
  }

  return DELIVERY_FEE;
}

// =====================================================
// GET DISCOUNT
// =====================================================

export function getDiscount(promoCode = "") {
  const code = promoCode.trim().toUpperCase();

  if (!code) {
    return 0;
  }

  return PROMO_CODES[code] || 0;
}

// =====================================================
// CHECK PROMO CODE
// =====================================================

export function isValidPromoCode(promoCode = "") {
  const code = promoCode.trim().toUpperCase();

  return Boolean(PROMO_CODES[code]);
}

// =====================================================
// GET CART TOTAL
// =====================================================

export function getCartTotal(promoCode = "") {
  const subtotal = getCartSubtotal();

  const delivery = getDeliveryFee();

  const discount = getDiscount(promoCode);

  return Math.max(subtotal + delivery - discount, 0);
}

// =====================================================
// GET FULL CART SUMMARY
// =====================================================

export function getCartSummary(promoCode = "") {
  const subtotal = getCartSubtotal();

  const delivery = getDeliveryFee();

  const discount = getDiscount(promoCode);

  const total = Math.max(subtotal + delivery - discount, 0);

  return {
    subtotal,

    delivery,

    discount,

    total,

    itemCount: getCartItemCount(),

    productCount: getCartProductCount(),
  };
}

// =====================================================
// UPDATE NAVBAR CART COUNT
// =====================================================

export function updateCartCount() {
  const cartCount = document.querySelector("#cart-count");

  if (!cartCount) {
    return;
  }

  const count = getCartItemCount();

  cartCount.textContent = count;

  cartCount.hidden = count === 0;
}

// =====================================================
// FORMAT PRICE
// =====================================================

export function formatPrice(price) {
  return `LKR ${price.toLocaleString()}`;
}

// =====================================================
// CART UPDATED EVENT
// =====================================================
//
// If another page/component changes
// the cart, update the navbar count.
//

window.addEventListener("cartUpdated", () => {
  updateCartCount();
});

// =====================================================
// INITIAL CART COUNT
// =====================================================

updateCartCount();
