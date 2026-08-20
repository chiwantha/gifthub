import { products } from "../data/products.js";

const CART_KEY = "gifthub_cart";

const FREE_DELIVERY_LIMIT = 10000;

const DELIVERY_FEE = 350;

const PROMO_CODES = {
  GIFTHUB10: 1000,
};

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

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(
    new CustomEvent("cartUpdated", {
      detail: {
        cart: cart,
      },
    }),
  );
}

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

export function removeFromCart(productId) {
  const cart = getCart();

  const updatedCart = cart.filter((item) => item.productId !== productId);

  saveCart(updatedCart);

  return updatedCart;
}

export function updateCartQuantity(productId, quantity) {
  const cart = getCart();

  const item = cart.find((item) => item.productId === productId);

  if (!item) {
    return cart;
  }

  if (quantity <= 0) {
    return removeFromCart(productId);
  }

  item.quantity = quantity;

  saveCart(cart);

  return cart;
}

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

export function clearCart() {
  saveCart([]);
}

export function getCartItemCount() {
  const cart = getCart();

  return cart.reduce((total, item) => total + item.quantity, 0);
}

export function getCartProductCount() {
  const cart = getCart();

  return cart.length;
}

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

export function getCartSubtotal() {
  const cartProducts = getCartProducts();

  return cartProducts.reduce((total, product) => total + product.itemTotal, 0);
}

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

export function getDiscount(promoCode = "") {
  const code = promoCode.trim().toUpperCase();

  if (!code) {
    return 0;
  }

  return PROMO_CODES[code] || 0;
}

export function isValidPromoCode(promoCode = "") {
  const code = promoCode.trim().toUpperCase();

  return Boolean(PROMO_CODES[code]);
}

export function getCartTotal(promoCode = "") {
  const subtotal = getCartSubtotal();

  const delivery = getDeliveryFee();

  const discount = getDiscount(promoCode);

  return Math.max(subtotal + delivery - discount, 0);
}

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

export function updateCartCount() {
  const cartCount = document.querySelector("#cart-count");

  if (!cartCount) {
    return;
  }

  const count = getCartItemCount();

  cartCount.textContent = count;

  cartCount.hidden = count === 0;
}

export function formatPrice(price) {
  return `LKR ${price.toLocaleString()}`;
}

window.addEventListener("cartUpdated", () => {
  updateCartCount();
});

updateCartCount();
