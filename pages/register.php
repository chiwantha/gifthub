<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Create Account - GiftHub</title>


    <!-- Global -->

    <link
        rel="stylesheet"
        href="../css/global.css"
    >


    <!-- Navbar -->

    <link
        rel="stylesheet"
        href="../css/navbar.css"
    >


    <!-- Footer -->

    <link
        rel="stylesheet"
        href="../css/footer.css"
    >


    <!-- Register -->

    <link
        rel="stylesheet"
        href="../css/register.css"
    >

</head>


<body>


    <!-- ================= NAVBAR ================= -->

    <?php include "../components/navbar/navbar.php"; ?>



    <main class="register-page">


        <!-- =================================================
             REGISTER HERO
        ================================================== -->

        <section class="register-hero">

            <div class="register-hero-content">

                <span class="section-label">
                    GIFTHUB
                </span>


                <h1>

                    Create your

                    <span>
                        account.
                    </span>

                </h1>


                <p>

                    Join GiftHub and make every special
                    moment a little more memorable.

                </p>

            </div>

        </section>



        <!-- =================================================
             REGISTER SECTION
        ================================================== -->

        <section class="register-section">

            <div class="register-layout">


                <!-- =================================================
                     LEFT SIDE
                ================================================== -->

                <div class="register-intro">


                    <span class="section-label">
                        WELCOME TO GIFTHUB
                    </span>


                    <h2>

                        Give more.

                        <span>
                            Remember more.
                        </span>

                    </h2>


                    <p>

                        Create your GiftHub account and
                        discover thoughtful gifts for the
                        people who matter most.

                    </p>



                    <!-- BENEFITS -->

                    <div class="register-benefits">


                        <div class="register-benefit">

                            <div class="benefit-icon">
                                🎁
                            </div>


                            <div>

                                <strong>
                                    Find the perfect gift
                                </strong>

                                <p>
                                    Explore gifts for every
                                    person and occasion.
                                </p>

                            </div>

                        </div>



                        <div class="register-benefit">

                            <div class="benefit-icon">
                                📦
                            </div>


                            <div>

                                <strong>
                                    Track your orders
                                </strong>

                                <p>
                                    Keep an eye on your
                                    GiftHub purchases.
                                </p>

                            </div>

                        </div>



                        <div class="register-benefit">

                            <div class="benefit-icon">
                                ❤️
                            </div>


                            <div>

                                <strong>
                                    Save your favourites
                                </strong>

                                <p>
                                    Keep your favourite gifts
                                    in one place.
                                </p>

                            </div>

                        </div>

                    </div>


                </div>



                <!-- =================================================
                     REGISTER CARD
                ================================================== -->

                <div class="register-card">


                    <!-- ================= FORM ================= -->

                    <div
                        id="register-form-wrapper"
                    >

                        <div class="register-card-header">

                            <h2>
                                Create Account
                            </h2>


                            <p>

                                Already have an account?

                                <a href="login.php">
                                    Login
                                </a>

                            </p>

                        </div>



                        <!-- ERROR -->

                        <div
                            id="register-error"
                            class="register-error"
                            hidden
                        ></div>



                        <!-- FORM -->

                        <form
                            id="register-form"
                            class="register-form"
                        >


                            <!-- NAME -->

                            <div class="form-row">


                                <div class="form-group">

                                    <label
                                        for="first-name"
                                    >
                                        First Name
                                    </label>


                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first_name"
                                        placeholder="First name"
                                        required
                                    >

                                </div>



                                <div class="form-group">

                                    <label
                                        for="last-name"
                                    >
                                        Last Name
                                    </label>


                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last_name"
                                        placeholder="Last name"
                                        required
                                    >

                                </div>

                            </div>



                            <!-- EMAIL -->

                            <div class="form-group">

                                <label for="email">
                                    Email Address
                                </label>


                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                >

                            </div>



                            <!-- USERNAME -->

                            <div class="form-group">

                                <label for="username">
                                    Username
                                </label>


                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Choose a username"
                                    required
                                    minlength="3"
                                >

                            </div>



                            <!-- PASSWORD -->

                            <div class="form-row">


                                <div class="form-group">

                                    <label for="password">
                                        Password
                                    </label>


                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Create password"
                                        minlength="6"
                                        required
                                    >

                                </div>



                                <div class="form-group">

                                    <label for="confirm-password">
                                        Confirm Password
                                    </label>


                                    <input
                                        type="password"
                                        id="confirm-password"
                                        name="confirm_password"
                                        placeholder="Confirm password"
                                        minlength="6"
                                        required
                                    >

                                </div>

                            </div>



                            <!-- TERMS -->

                            <label class="terms-checkbox">

                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                >

                                <span>

                                    I agree to the
                                    <a href="#">
                                        Terms & Conditions
                                    </a>

                                    and

                                    <a href="#">
                                        Privacy Policy
                                    </a>

                                </span>

                            </label>



                            <!-- SUBMIT -->

                            <button
                                type="submit"
                                class="register-button"
                            >

                                Create Account →

                            </button>


                            <p class="register-note">

                                🔒 Your information is
                                kept private and secure.

                            </p>

                        </form>

                    </div>



                    <!-- =================================================
                         SUCCESS
                    ================================================== -->

                    <div
                        id="register-success"
                        class="register-success"
                        hidden
                    >

                        <div class="success-icon">
                            ✓
                        </div>


                        <span class="section-label">
                            WELCOME TO GIFTHUB
                        </span>


                        <h2>

                            Account

                            <span>
                                created!
                            </span>

                        </h2>


                        <p>

                            Your GiftHub account has been
                            successfully created.

                            You're ready to start finding
                            the perfect gifts.

                        </p>


                        <a
                            href="login.php"
                            class="login-button"
                        >

                            Continue to Login →

                        </a>

                    </div>

                </div>

            </div>

        </section>


    </main>



    <!-- ================= FOOTER ================= -->

    <?php include "../components/footer/footer.php"; ?>



    <!-- ================= JS ================= -->

    <script
        type="module"
        src="../js/register.js"
    ></script>


</body>

</html>