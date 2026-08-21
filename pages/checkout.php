<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>Checkout - GiftHub</title>


    <link
        rel="stylesheet"
        href="../css/global.css">

    <link
        rel="stylesheet"
        href="../css/navbar.css">

    <link
        rel="stylesheet"
        href="../css/footer.css">

    <link
        rel="stylesheet"
        href="../css/checkout.css">

</head>


<body>


    <?php include "../components/navbar/navbar.php"; ?>


    <main>


        <!-- ================= CHECKOUT HEADER ================= -->

        <section class="checkout-header">

            <div class="checkout-header-content">

                <span class="section-label">
                    GIFTHUB
                </span>

                <h1>
                    Secure <span>Checkout</span>
                </h1>

                <p>
                    Complete your order and make someone's day special.
                </p>

            </div>

        </section>


        <!-- ================= CHECKOUT ================= -->

        <section class="checkout-section">


            <div class="checkout-layout">


                <!-- ================================================= -->
                <!-- LEFT SIDE -->
                <!-- ================================================= -->

                <div class="checkout-main">


                    <!-- ================= CUSTOMER DETAILS ================= -->

                    <section class="checkout-card">

                        <div class="checkout-card-header">

                            <div>

                                <span class="checkout-step">
                                    01
                                </span>

                                <h2>
                                    Delivery Information
                                </h2>

                            </div>

                        </div>


                        <div class="form-grid">


                            <div class="form-group">

                                <label for="first-name">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="first-name"
                                    placeholder="John">

                            </div>


                            <div class="form-group">

                                <label for="last-name">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="last-name"
                                    placeholder="Doe">

                            </div>


                            <div class="form-group">

                                <label for="email">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com">

                            </div>


                            <div class="form-group">

                                <label for="phone">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="0771234567">

                            </div>


                            <div class="form-group full-width">

                                <label for="address">
                                    Delivery Address
                                </label>

                                <input
                                    type="text"
                                    id="address"
                                    placeholder="House number, Street">

                            </div>


                            <div class="form-group">

                                <label for="city">
                                    City
                                </label>

                                <input
                                    type="text"
                                    id="city"
                                    placeholder="Colombo">

                            </div>


                            <div class="form-group">

                                <label for="province">
                                    Province
                                </label>

                                <select id="province">

                                    <option value="">
                                        Select Province
                                    </option>

                                    <option>
                                        Western
                                    </option>

                                    <option>
                                        Central
                                    </option>

                                    <option>
                                        Southern
                                    </option>

                                    <option>
                                        Northern
                                    </option>

                                    <option>
                                        Eastern
                                    </option>

                                    <option>
                                        North Western
                                    </option>

                                    <option>
                                        North Central
                                    </option>

                                    <option>
                                        Uva
                                    </option>

                                    <option>
                                        Sabaragamuwa
                                    </option>

                                </select>

                            </div>

                        </div>

                    </section>



                    <!-- ================= PAYMENT ================= -->

                    <section class="checkout-card">

                        <div class="checkout-card-header">

                            <div>

                                <span class="checkout-step">
                                    02
                                </span>

                                <h2>
                                    Payment Method
                                </h2>

                            </div>

                        </div>


                        <!-- PAYMENT OPTIONS -->

                        <div class="payment-methods">


                            <!-- COD -->

                            <label class="payment-option">

                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="cod"
                                    checked>

                                <div class="payment-option-content">

                                    <div class="payment-icon">
                                        💵
                                    </div>

                                    <div>

                                        <strong>
                                            Cash on Delivery
                                        </strong>

                                        <span>
                                            Pay when your gift arrives
                                        </span>

                                    </div>

                                </div>

                            </label>



                            <!-- CARD -->

                            <label class="payment-option">

                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="card">

                                <div class="payment-option-content">

                                    <div class="payment-icon">
                                        💳
                                    </div>

                                    <div>

                                        <strong>
                                            Credit / Debit Card
                                        </strong>

                                        <span>
                                            Secure card payment
                                        </span>

                                    </div>

                                </div>

                            </label>

                        </div>


                        <!-- ================= CARD FORM ================= -->

                        <div
                            id="card-form"
                            class="card-form"
                            hidden>


                            <div class="demo-payment-notice">

                                <strong>
                                    Demo Payment
                                </strong>

                                <span>
                                    No real payment will be processed.
                                </span>

                            </div>


                            <div class="form-group">

                                <label for="card-number">
                                    Card Number
                                </label>

                                <input
                                    type="text"
                                    id="card-number"
                                    maxlength="19"
                                    placeholder="4242 4242 4242 4242">

                            </div>


                            <div class="form-grid">


                                <div class="form-group">

                                    <label for="card-name">
                                        Cardholder Name
                                    </label>

                                    <input
                                        type="text"
                                        id="card-name"
                                        placeholder="John Doe">

                                </div>


                                <div class="form-group">

                                    <label for="expiry">
                                        Expiry
                                    </label>

                                    <input
                                        type="text"
                                        id="expiry"
                                        maxlength="5"
                                        placeholder="MM/YY">

                                </div>


                                <div class="form-group">

                                    <label for="cvv">
                                        CVV
                                    </label>

                                    <input
                                        type="password"
                                        id="cvv"
                                        maxlength="4"
                                        placeholder="123">

                                </div>

                            </div>

                        </div>

                    </section>



                    <!-- ================= ORDER NOTES ================= -->

                    <section class="checkout-card">

                        <div class="checkout-card-header">

                            <div>

                                <span class="checkout-step">
                                    03
                                </span>

                                <h2>
                                    Order Notes
                                </h2>

                            </div>

                        </div>


                        <div class="form-group">

                            <label for="order-notes">
                                Special instructions
                                <span>
                                    (Optional)
                                </span>
                            </label>

                            <textarea
                                id="order-notes"
                                rows="4"
                                placeholder="Any special delivery instructions..."></textarea>

                        </div>

                    </section>


                </div>



                <!-- ================================================= -->
                <!-- RIGHT SIDE -->
                <!-- ================================================= -->

                <aside class="checkout-summary">


                    <h2>
                        Your Order
                    </h2>


                    <!-- PRODUCTS -->

                    <div
                        id="checkout-items"
                        class="checkout-items">

                        <!-- Loaded by JavaScript -->

                    </div>


                    <div class="summary-divider"></div>


                    <div class="summary-row">

                        <span>
                            Subtotal
                        </span>

                        <strong id="checkout-subtotal">
                            LKR 0
                        </strong>

                    </div>


                    <div class="summary-row">

                        <span>
                            Delivery
                        </span>

                        <strong id="checkout-delivery">
                            LKR 0
                        </strong>

                    </div>


                    <div
                        id="checkout-discount-row"
                        class="summary-row"
                        hidden>

                        <span>
                            Discount
                        </span>

                        <strong id="checkout-discount">
                            - LKR 0
                        </strong>

                    </div>


                    <div class="summary-divider"></div>


                    <div class="checkout-total">

                        <span>
                            Total
                        </span>

                        <strong id="checkout-total">
                            LKR 0
                        </strong>

                    </div>


                    <button
                        id="place-order"
                        class="place-order-button">

                        <span id="place-order-text">
                            Place Order
                        </span>

                        →

                    </button>


                    <div class="secure-payment">

                        🔒

                        <span>
                            Your information is secure
                        </span>

                    </div>

                </aside>


            </div>


        </section>

    </main>


    <!-- ================= ORDER SUCCESS ================= -->

    <section
        id="order-success"
        class="order-success"
        hidden>

        <div class="success-card">

            <div class="success-icon">
                ✓
            </div>

            <span class="section-label">
                GIFTHUB
            </span>

            <h1>
                Order <span>Placed!</span>
            </h1>

            <p>
                Thank you for your order.
                Your gift is on its way.
            </p>

            <div class="order-number">

                Order ID:

                <strong id="order-id">
                    GH-000000
                </strong>

            </div>

            <a
                href="../index.php"
                class="btn btn-primary">

                Continue Shopping

            </a>

        </div>

    </section>


    <?php include "../components/footer/footer.php"; ?>


    <script
        type="module"
        src="../js/checkout.js">
    </script>


</body>

</html>