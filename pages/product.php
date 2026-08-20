<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Product - GiftHub</title>

    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/product.css">
    <link rel="stylesheet" href="../css/productCard.css">
</head>

<body>

    <?php include "../components/navbar/navbar.php"; ?>


    <main>

        <!-- ================= BREADCRUMB ================= -->

        <div class="product-breadcrumb">

            <a href="../index.php">
                Home
            </a>

            <span>/</span>

            <a href="shop.php">
                Shop
            </a>

            <span>/</span>

            <span id="breadcrumb-product">
                Product
            </span>

        </div>


        <!-- ================= PRODUCT ================= -->

        <section class="product-page">

            <div
                id="product-details"
                class="product-details">

                <!-- Product will be loaded here -->

            </div>


            <!-- ================= NOT FOUND ================= -->

            <div
                id="product-not-found"
                class="product-not-found"
                hidden>

                <div class="not-found-icon">
                    🎁
                </div>

                <h1>
                    Gift not found
                </h1>

                <p>
                    Sorry, we couldn't find the gift you're looking for.
                </p>

                <a
                    href="shop.php"
                    class="btn btn-primary">

                    Back to Shop

                </a>

            </div>

        </section>


        <!-- ================= RELATED PRODUCTS ================= -->

        <section
            id="related-section"
            class="related-section">

            <div class="section-heading">

                <div>

                    <span class="section-label">
                        YOU MAY ALSO LIKE
                    </span>

                    <h2>
                        More gifts for you
                    </h2>

                </div>

                <a
                    href="shop.php"
                    class="view-all">

                    View All →

                </a>

            </div>


            <div
                id="related-products"
                class="product-grid">

            </div>

        </section>

    </main>


    <?php include "../components/footer/footer.php"; ?>


    <script
        type="module"
        src="../js/product.js">
    </script>

</body>

</html>