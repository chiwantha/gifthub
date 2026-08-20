<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Shop - GiftHub</title>

    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/productCard.css">
    <link rel="stylesheet" href="../css/shop.css">
</head>

<body>

    <?php include "../components/navbar/navbar.php"; ?>


    <main>

        <!-- ================= SHOP HERO ================= -->

        <section class="shop-hero">

            <div class="shop-hero-content">

                <span class="section-label">
                    GIFTHUB COLLECTION
                </span>

                <h1>
                    Find the perfect
                    <span>gift.</span>
                </h1>

                <p>
                    Explore our collection of thoughtful gifts
                    for every person, occasion and special moment.
                </p>

            </div>

        </section>


        <!-- ================= SHOP ================= -->

        <section class="shop-section">

            <!-- SHOP HEADER -->

            <div class="shop-header">

                <div>

                    <span class="section-label">
                        OUR COLLECTION
                    </span>

                    <h2>
                        All Gifts
                    </h2>

                    <p class="product-count">
                        Showing <span id="product-count">0</span> gifts
                    </p>

                </div>


                <div class="shop-sort">

                    <label for="sort">
                        Sort by
                    </label>

                    <select id="sort">

                        <option value="featured">
                            Featured
                        </option>

                        <option value="price-low">
                            Price: Low to High
                        </option>

                        <option value="price-high">
                            Price: High to Low
                        </option>

                        <option value="rating">
                            Highest Rated
                        </option>

                    </select>

                </div>

            </div>


            <!-- SHOP CONTENT -->

            <div class="shop-layout">


                <!-- ================= FILTER SIDEBAR ================= -->

                <aside class="shop-sidebar">

                    <div class="filter-header">

                        <h3>
                            Filters
                        </h3>

                        <button id="clear-filters">
                            Clear All
                        </button>

                    </div>


                    <!-- Category -->

                    <div class="filter-group">

                        <h4>
                            Category
                        </h4>

                        <label class="filter-option">
                            <input
                                type="checkbox"
                                value="Birthday"
                                class="category-filter">
                            <span>Birthday</span>
                        </label>

                        <label class="filter-option">
                            <input
                                type="checkbox"
                                value="Romantic"
                                class="category-filter">
                            <span>Romantic</span>
                        </label>

                        <label class="filter-option">
                            <input
                                type="checkbox"
                                value="Flowers"
                                class="category-filter">
                            <span>Flowers</span>
                        </label>

                        <label class="filter-option">
                            <input
                                type="checkbox"
                                value="Toys"
                                class="category-filter">
                            <span>Toys</span>
                        </label>

                        <label class="filter-option">
                            <input
                                type="checkbox"
                                value="Accessories"
                                class="category-filter">
                            <span>Accessories</span>
                        </label>

                        <label class="filter-option">
                            <input
                                type="checkbox"
                                value="Gift Sets"
                                class="category-filter">
                            <span>Gift Sets</span>
                        </label>

                    </div>


                    <!-- Price -->

                    <div class="filter-group">

                        <h4>
                            Price
                        </h4>

                        <label class="filter-option">

                            <input
                                type="radio"
                                name="price"
                                value="all"
                                checked>

                            <span>All Prices</span>

                        </label>

                        <label class="filter-option">

                            <input
                                type="radio"
                                name="price"
                                value="under5000">

                            <span>Under LKR 5,000</span>

                        </label>

                        <label class="filter-option">

                            <input
                                type="radio"
                                name="price"
                                value="5000-10000">

                            <span>LKR 5,000 - 10,000</span>

                        </label>

                        <label class="filter-option">

                            <input
                                type="radio"
                                name="price"
                                value="over10000">

                            <span>Over LKR 10,000</span>

                        </label>

                    </div>


                    <!-- Rating -->

                    <div class="filter-group">

                        <h4>
                            Rating
                        </h4>

                        <label class="filter-option">

                            <input
                                type="radio"
                                name="rating"
                                value="4"
                                checked>

                            <span>★★★★ & up</span>

                        </label>

                        <label class="filter-option">

                            <input
                                type="radio"
                                name="rating"
                                value="4.5">

                            <span>★★★★½ & up</span>

                        </label>

                    </div>

                </aside>


                <!-- ================= PRODUCTS ================= -->

                <div class="shop-products">

                    <div
                        id="shop-product-container"
                        class="product-grid">
                    </div>


                    <div
                        id="no-products"
                        class="no-products"
                        hidden>

                        <div class="no-products-icon">
                            🎁
                        </div>

                        <h3>
                            No gifts found
                        </h3>

                        <p>
                            Try changing your filters to find
                            more gifts.
                        </p>

                        <button
                            id="reset-shop"
                            class="btn btn-primary">

                            Clear Filters

                        </button>

                    </div>

                </div>

            </div>

        </section>

    </main>


    <?php include "../components/footer/footer.php"; ?>


    <script type="module" src="../js/shop.js"></script>

</body>

</html>