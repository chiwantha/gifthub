<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GiftHub - Gifts for Every Moment</title>

    <!-- Global CSS -->
    <link rel="stylesheet" href="css/global.css">

    <!-- Component CSS -->
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/productCard.css">

    <!-- Page CSS -->
    <link rel="stylesheet" href="css/home.css">
</head>

<body>

    <?php include "components/navbar/navbar.php"; ?>


    <!-- ================= HERO ================= -->

    <main>

        <section class="hero">

            <div class="hero-content">

                <span class="hero-tag">
                    MAKE EVERY MOMENT SPECIAL
                </span>

                <h1>
                    Gifts that make
                    <span>memories.</span>
                </h1>

                <p>
                    Discover thoughtful gifts for birthdays, anniversaries,
                    celebrations and every special moment.
                </p>

                <div class="hero-actions">

                    <a href="#featured" class="btn btn-primary">
                        Explore Gifts
                    </a>

                    <a href="#categories" class="btn btn-secondary">
                        Browse Categories
                    </a>

                </div>

            </div>

            <div class="hero-image">

                <div class="hero-card">
                    <img src="./img.png" alt="image.png"  />
                </div>

            </div>

        </section>


        <!-- ================= CATEGORIES ================= -->

        <section class="section categories-section" id="categories">

            <div class="section-heading">

                <div>
                    <span class="section-label">
                        SHOP BY CATEGORY
                    </span>

                    <h2>
                        Something for everyone
                    </h2>
                </div>

                <a href="pages/shop.php" class="view-all">
                    View All
                </a>

            </div>


            <div class="category-grid">

                <a href="#" class="category-card">
                    <div class="category-icon">🎂</div>
                    <h3>Birthday</h3>
                    <p>Make their birthday unforgettable</p>
                </a>

                <a href="#" class="category-card">
                    <div class="category-icon">❤️</div>
                    <h3>Romantic</h3>
                    <p>Gifts straight from the heart</p>
                </a>

                <a href="#" class="category-card">
                    <div class="category-icon">💐</div>
                    <h3>Flowers</h3>
                    <p>Beautiful flowers for every occasion</p>
                </a>

                <a href="#" class="category-card">
                    <div class="category-icon">🧸</div>
                    <h3>Toys</h3>
                    <p>Fun gifts for little ones</p>
                </a>

                <a href="#" class="category-card">
                    <div class="category-icon">⌚</div>
                    <h3>Accessories</h3>
                    <p>Stylish gifts they'll love</p>
                </a>

                <a href="#" class="category-card">
                    <div class="category-icon">🎁</div>
                    <h3>Gift Sets</h3>
                    <p>Perfectly packed surprises</p>
                </a>

            </div>

        </section>


        <!-- ================= FEATURED PRODUCTS ================= -->

        <section class="section" id="featured">

            <div class="section-heading">

                <div>
                    <span class="section-label">
                        OUR COLLECTION
                    </span>

                    <h2>
                        Popular gifts
                    </h2>
                </div>

                <a href="pages/shop.php" class="view-all">
                    View All
                </a>

            </div>


            <!-- Products will be inserted here -->

            <div
                id="product-container"
                class="product-grid">
            </div>

        </section>


        <!-- ================= PROMO ================= -->

        <section class="promo-section">

            <div class="promo-content">

                <span class="section-label">
                    MAKE IT EXTRA SPECIAL
                </span>

                <h2>
                    Add a little more
                    <span>love.</span>
                </h2>

                <p>
                    Personalize your gift with beautiful wrapping,
                    handwritten messages and more.
                </p>

                <a href="pages/products.php" class="btn btn-primary">
                    Start Shopping
                </a>

            </div>

        </section>


        <!-- ================= WHY GIFTHUB ================= -->

        <section class="section">

            <div class="section-heading centered">

                <span class="section-label">
                    WHY GIFTHUB
                </span>

                <h2>
                    Gifting made simple
                </h2>

                <p>
                    Everything you need to make someone's day special.
                </p>

            </div>


            <div class="benefits-grid">

                <div class="benefit-card">

                    <div class="benefit-icon">
                        🎁
                    </div>

                    <h3>
                        Thoughtful Gifts
                    </h3>

                    <p>
                        Carefully selected gifts for every personality
                        and occasion.
                    </p>

                </div>


                <div class="benefit-card">

                    <div class="benefit-icon">
                        🚚
                    </div>

                    <h3>
                        Fast Delivery
                    </h3>

                    <p>
                        Get your gifts delivered safely and on time.
                    </p>

                </div>


                <div class="benefit-card">

                    <div class="benefit-icon">
                        💝
                    </div>

                    <h3>
                        Beautifully Wrapped
                    </h3>

                    <p>
                        Make your gift even more special with premium
                        gift wrapping.
                    </p>

                </div>


                <div class="benefit-card">

                    <div class="benefit-icon">
                        🔒
                    </div>

                    <h3>
                        Secure Shopping
                    </h3>

                    <p>
                        Shop confidently with secure and reliable payments.
                    </p>

                </div>

            </div>

        </section>

    </main>


    <?php include "components/footer/footer.php"; ?>


    <!-- JavaScript -->

    <script type="module" src="js/home.js"></script>

</body>

</html>