<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Login - GiftHub</title>


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


    <!-- Login -->

    <link
        rel="stylesheet"
        href="../css/login.css"
    >

</head>


<body>


    <!-- ================= NAVBAR ================= -->

    <?php include "../components/navbar/navbar.php"; ?>


    <main class="login-page">


        <!-- ================= HERO ================= -->

        <section class="login-hero">

            <div class="login-hero-content">

                <span class="section-label">
                    GIFTHUB
                </span>


                <h1>

                    Welcome

                    <span>
                        back.
                    </span>

                </h1>


                <p>

                    Sign in to your GiftHub account
                    and continue finding the perfect gift.

                </p>

            </div>

        </section>



        <!-- ================= LOGIN ================= -->

        <section class="login-section">

            <div class="login-layout">


                <!-- ================= LEFT ================= -->

                <div class="login-intro">

                    <span class="section-label">
                        WELCOME BACK
                    </span>


                    <h2>

                        Your gifts are

                        <span>
                            waiting.
                        </span>

                    </h2>


                    <p>

                        Sign in to access your account,
                        track your orders and keep all
                        your favourite gifts in one place.

                    </p>



                    <div class="login-benefits">


                        <div class="login-benefit">

                            <div class="benefit-icon">
                                📦
                            </div>

                            <div>

                                <strong>
                                    Track your orders
                                </strong>

                                <p>
                                    Easily follow your
                                    purchases and deliveries.
                                </p>

                            </div>

                        </div>



                        <div class="login-benefit">

                            <div class="benefit-icon">
                                ❤️
                            </div>

                            <div>

                                <strong>
                                    Your favourites
                                </strong>

                                <p>
                                    Keep your favourite gifts
                                    close at hand.
                                </p>

                            </div>

                        </div>



                        <div class="login-benefit">

                            <div class="benefit-icon">
                                🎁
                            </div>

                            <div>

                                <strong>
                                    Discover more gifts
                                </strong>

                                <p>
                                    Find something special
                                    for every occasion.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>



                <!-- ================= LOGIN CARD ================= -->

                <div class="login-card">


                    <div id="login-form-wrapper">


                        <div class="login-card-header">

                            <h2>
                                Sign In
                            </h2>


                            <p>

                                Don't have an account?

                                <a href="register.php">
                                    Create one
                                </a>

                            </p>

                        </div>



                        <!-- ================= ERROR ================= -->

                        <div
                            id="login-error"
                            class="login-error"
                            hidden
                        ></div>



                        <!-- ================= SUCCESS ================= -->

                        <div
                            id="login-success"
                            class="login-success-message"
                            hidden
                        ></div>



                        <!-- ================= FORM ================= -->

                        <form
                            id="login-form"
                            class="login-form"
                        >


                            <!-- USERNAME -->

                            <div class="form-group">

                                <label for="username">
                                    Username
                                </label>


                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    autocomplete="username"
                                    required
                                >

                            </div>



                            <!-- PASSWORD -->

                            <div class="form-group">

                                <label for="password">
                                    Password
                                </label>


                                <div class="password-wrapper">

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        autocomplete="current-password"
                                        required
                                    >


                                    <button
                                        type="button"
                                        id="toggle-password"
                                        class="toggle-password"
                                        aria-label="Show password"
                                    >
                                        👁
                                    </button>

                                </div>

                            </div>



                            <!-- REMEMBER -->

                            <div class="login-options">

                                <label class="remember-me">

                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                    >

                                    <span>
                                        Remember me
                                    </span>

                                </label>


                                <a
                                    href="#"
                                    class="forgot-password"
                                >
                                    Forgot password?
                                </a>

                            </div>



                            <!-- LOGIN -->

                            <button
                                type="submit"
                                class="login-submit"
                            >

                                Sign In →

                            </button>


                            <p class="login-note">

                                🔒 Secure and private login

                            </p>

                        </form>

                    </div>


                    <!-- ================= SUCCESS ================= -->

                    <div
                        id="login-success-page"
                        class="login-success-page"
                        hidden
                    >

                        <div class="success-icon">
                            ✓
                        </div>


                        <span class="section-label">
                            LOGIN SUCCESSFUL
                        </span>


                        <h2>

                            Welcome

                            <span>
                                back!
                            </span>

                        </h2>


                        <p id="login-success-text">

                            You have successfully signed in.

                        </p>

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
        src="../js/login.js"
    ></script>


</body>

</html>