export function createProductCard(product, basePath = "") {
  return `
        <article class="product-card">

            <a
                href="${basePath}product.php?id=${product.id}"
                class="product-card-link">

                <div class="product-image">

                    ${
                      product.badge
                        ? `<span class="product-badge">${product.badge}</span>`
                        : ""
                    }

                    <button
                        class="wishlist-button"
                        onclick="event.preventDefault()">

                        ♡

                    </button>

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <div class="product-rating">

                        <span>★</span>

                        <span>
                            ${product.rating}
                        </span>

                    </div>


                    <div class="product-bottom">

                        <span class="product-price">
                            LKR ${product.price.toLocaleString()}
                        </span>

                        <button
                            class="add-cart"
                            onclick="event.preventDefault()">

                            Add to Cart

                        </button>

                    </div>

                </div>

            </a>

        </article>
    `;
}
