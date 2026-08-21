<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Your Cart - GiftHub</title>

    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/cart.css">
</head>

<body>

    <?php include "../components/navbar/navbar.php"; ?>


    <main>

        <!-- ================= CART HEADER ================= -->

        <section class="cart-header">

            <div class="cart-header-content">

                <span class="section-label">
                    GIFTHUB
                </span>

                <h1>
                    Your <span>Cart</span>
                </h1>

                <p>
                    Review your gifts before you checkout.
                </p>

            </div>

        </section>


        <!-- ================= CART ================= -->

        <section class="cart-section">


            <!-- ================= CART CONTENT ================= -->

            <div
                id="cart-content"
                class="cart-layout">


                <!-- ================= CART ITEMS ================= -->

                <div class="cart-items-section">

                    <div class="cart-items-header">

                        <div class="cart-title">

                            <h2>
                                Shopping Cart
                            </h2>

                            <span id="cart-item-count">
                                0 items
                            </span>

                        </div>

                        <button
                            type="button"
                            id="clear-cart"
                            class="clear-cart-button">

                            Clear Cart

                        </button>

                    </div>


                    <div 
                    id="cart-items" 
                    class="cart-items">

                    <!-- Items inserted by JavaScript -->

                    </div>

                    <!-- ================= EMPTY CART ================= -->

                    <div
                        id="empty-cart"
                        class="empty-cart"
                        hidden>

                        <div class="empty-cart-icon">
                            🛒
                        </div>

                        <h2>
                            Your cart is empty
                        </h2>

                        <p>
                            Looks like you haven't added any gifts yet.
                        </p>

                        <a
                            href="shop.php"
                            class="btn btn-primary">

                            Start Shopping

                        </a>

                    </div>

                    <!-- CONTINUE SHOPPING -->

                    <a
                        href="shop.php"
                        class="continue-shopping">

                        ← Continue Shopping

                    </a>

                </div>


                <!-- ================= ORDER SUMMARY ================= -->

                <aside class="cart-summary">

                    <h2>
                        Order Summary
                    </h2>


                    <!-- Subtotal -->

                    <div class="summary-row">

                        <span>
                            Subtotal
                        </span>

                        <strong id="cart-subtotal">
                            LKR 0
                        </strong>

                    </div>


                    <!-- Delivery -->

                    <div class="summary-row">

                        <span>
                            Delivery
                        </span>

                        <strong id="cart-delivery">
                            LKR 0
                        </strong>

                    </div>


                    <!-- Discount -->

                    <div
                        id="discount-row"
                        class="summary-row discount-row"
                        hidden>

                        <span>
                            Discount
                        </span>

                        <strong id="cart-discount">
                            - LKR 0
                        </strong>

                    </div>


                    <div class="summary-divider"></div>


                    <!-- Total -->

                    <div class="summary-total">

                        <span>
                            Total
                        </span>

                        <strong id="cart-total">
                            LKR 0
                        </strong>

                    </div>


                    <!-- Promo -->

                    <div class="promo-section">

                        <label for="promo-code">
                            Have a promo code?
                        </label>

                        <div class="promo-input">

                            <input
                                type="text"
                                id="promo-code"
                                placeholder="Enter code">

                            <button id="apply-promo">
                                Apply
                            </button>

                        </div>

                        <small id="promo-message"></small>

                    </div>


                    <!-- Checkout -->

                    <button
                        id="checkout-button"
                        class="checkout-button">

                        Proceed to Checkout
                        →

                    </button>


                    <!-- Payment Info -->

                    <div class="secure-payment">

                        🔒

                        <span>
                            Secure and safe checkout
                        </span>

                    </div>

                </aside>

            </div>

        </section>

    </main>


    <?php include "../components/footer/footer.php"; ?>


    <script
    type="module"
    src="../js/cartPage.js">
</script>

</body>

</html>