import { products } from "../data/products.js";
import { createProductCard } from "../components/productCard/productCard.js";

// ================= GET PRODUCT ID =================

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

// ================= FIND PRODUCT =================

const product = products.find((item) => item.id === productId);

// ================= ELEMENTS =================

const productDetails = document.getElementById("product-details");

const productNotFound = document.getElementById("product-not-found");

const relatedSection = document.getElementById("related-section");

const relatedProducts = document.getElementById("related-products");

const breadcrumbProduct = document.getElementById("breadcrumb-product");

// ================= PRODUCT NOT FOUND =================

if (!product) {
  productDetails.hidden = true;

  productNotFound.hidden = false;

  relatedSection.hidden = true;
}

// ================= DISPLAY PRODUCT =================
else {
  document.title = `${product.name} - GiftHub`;

  breadcrumbProduct.textContent = product.name;

  productDetails.innerHTML = `

        <!-- ================= IMAGE ================= -->

        <div class="product-gallery">

            <div class="product-main-image">

                ${
                  product.badge
                    ? `
                            <span class="detail-badge">
                                ${product.badge}
                            </span>
                        `
                    : ""
                }

                <button
                    class="detail-wishlist"
                    aria-label="Add to wishlist">

                    ♡

                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}">
                    
            </div>

        </div>


        <!-- ================= INFORMATION ================= -->

        <div class="product-information">

            <span class="detail-category">
                ${product.category}
            </span>


            <h1>
                ${product.name}
            </h1>


            <div class="detail-rating">

                <span class="stars">
                    ★★★★★
                </span>

                <span>
                    ${product.rating}
                </span>

                <span class="review-count">
                    (24 Reviews)
                </span>

            </div>


            <div class="detail-price">

                LKR ${product.price.toLocaleString()}

            </div>


            <p class="detail-description">

                Make someone's day extra special with
                this beautiful ${product.name}.
                Carefully selected and beautifully presented,
                it's a thoughtful gift for any special occasion.

            </p>


            <!-- ================= AVAILABILITY ================= -->

            <div class="availability">

                <span class="availability-dot"></span>

                <span>
                    In Stock
                </span>

            </div>


            <!-- ================= DIVIDER ================= -->

            <div class="detail-divider"></div>


            <!-- ================= QUANTITY ================= -->

            <div class="quantity-section">

                <label>
                    Quantity
                </label>

                <div class="quantity-control">

                    <button
                        id="quantity-minus">

                        −

                    </button>

                    <span id="quantity">
                        1
                    </span>

                    <button
                        id="quantity-plus">

                        +

                    </button>

                </div>

            </div>


            <!-- ================= ACTIONS ================= -->

            <div class="detail-actions">

                <button
                    id="add-to-cart"
                    class="btn btn-primary add-to-cart-btn">

                    Add to Cart

                </button>


                <button
                    class="buy-now-btn">

                    Buy Now

                </button>

            </div>


            <!-- ================= FEATURES ================= -->

            <div class="product-features">

                <div class="feature">

                    <span class="feature-icon">
                        🚚
                    </span>

                    <div>

                        <strong>
                            Fast Delivery
                        </strong>

                        <p>
                            Delivered safely to your door
                        </p>

                    </div>

                </div>


                <div class="feature">

                    <span class="feature-icon">
                        🎁
                    </span>

                    <div>

                        <strong>
                            Gift Wrapping
                        </strong>

                        <p>
                            Beautifully wrapped for free
                        </p>

                    </div>

                </div>


                <div class="feature">

                    <span class="feature-icon">
                        🔒
                    </span>

                    <div>

                        <strong>
                            Secure Payment
                        </strong>

                        <p>
                            Safe and secure checkout
                        </p>

                    </div>

                </div>

            </div>

        </div>

    `;

  // ================= QUANTITY =================

  let quantity = 1;

  const quantityElement = document.getElementById("quantity");

  const minusButton = document.getElementById("quantity-minus");

  const plusButton = document.getElementById("quantity-plus");

  minusButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;

      quantityElement.textContent = quantity;
    }
  });

  plusButton.addEventListener("click", () => {
    quantity++;

    quantityElement.textContent = quantity;
  });

  // ================= ADD TO CART =================

  document.getElementById("add-to-cart").addEventListener("click", () => {
    console.log("Added to cart:", product, "Quantity:", quantity);

    alert(`${product.name} added to cart!`);
  });

  // ================= RELATED PRODUCTS =================

  const related = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 3);

  relatedProducts.innerHTML = related
    .map((item) => createProductCard(item))
    .join("");
}
