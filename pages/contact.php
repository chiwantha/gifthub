<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Contact Us - GiftHub</title>


    <link
        rel="stylesheet"
        href="../css/global.css"
    >

    <link
        rel="stylesheet"
        href="../css/navbar.css"
    >

    <link
        rel="stylesheet"
        href="../css/footer.css"
    >

    <link
        rel="stylesheet"
        href="../css/contact.css"
    >

</head>


<body>


<?php include "../components/navbar/navbar.php"; ?>


<main>


    <!-- =================================================
         CONTACT HERO
    ================================================== -->

    <section class="contact-hero">

        <div class="contact-hero-content">

            <span class="section-label">
                GET IN TOUCH
            </span>

            <h1>
                We'd love to
                <span>hear from you.</span>
            </h1>

            <p>
                Have a question about an order, a product,
                or just need some help finding the perfect
                gift? We're here to help.
            </p>

        </div>

    </section>



    <!-- =================================================
         CONTACT SECTION
    ================================================== -->

    <section class="contact-section">

        <div class="contact-layout">


            <!-- =================================================
                 CONTACT INFORMATION
            ================================================== -->

            <div class="contact-information">

                <span class="section-label">
                    CONTACT US
                </span>

                <h2>
                    Let's talk about
                    <span>your next gift.</span>
                </h2>

                <p class="contact-intro">
                    Our team is always happy to help.
                    Reach out to us through any of the
                    channels below and we'll get back
                    to you as soon as possible.
                </p>


                <!-- EMAIL -->

                <div class="contact-detail">

                    <div class="contact-icon">
                        ✉
                    </div>

                    <div>

                        <span>
                            Email
                        </span>

                        <strong>
                            hello@gifthub.lk
                        </strong>

                        <p>
                            We usually reply within 24 hours.
                        </p>

                    </div>

                </div>


                <!-- PHONE -->

                <div class="contact-detail">

                    <div class="contact-icon">
                        ☎
                    </div>

                    <div>

                        <span>
                            Phone
                        </span>

                        <strong>
                            +94 11 234 5678
                        </strong>

                        <p>
                            Monday - Saturday,
                            9:00 AM - 6:00 PM
                        </p>

                    </div>

                </div>


                <!-- LOCATION -->

                <div class="contact-detail">

                    <div class="contact-icon">
                        📍
                    </div>

                    <div>

                        <span>
                            Visit Us
                        </span>

                        <strong>
                            GiftHub Store
                        </strong>

                        <p>
                            123 Flower Road,
                            Colombo 07,
                            Sri Lanka
                        </p>

                    </div>

                </div>


                <!-- SOCIAL -->

                <div class="contact-social">

                    <span>
                        Follow GiftHub
                    </span>

                    <div class="social-links">

                        <a href="#">
                            Instagram
                        </a>

                        <a href="#">
                            Facebook
                        </a>

                        <a href="#">
                            TikTok
                        </a>

                    </div>

                </div>

            </div>



            <!-- =================================================
                 CONTACT FORM
            ================================================== -->

            <div id="contact-form-wrapper">

                <form
                    class="contact-form"
                    id="contact-form"
                >

                    <!-- NAME -->

                    <div class="form-row">

                        <div class="form-group">

                            <label for="first-name">
                                First Name
                            </label>

                            <input
                                type="text"
                                id="first-name"
                                name="first_name"
                                placeholder="Your first name"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label for="last-name">
                                Last Name
                            </label>

                            <input
                                type="text"
                                id="last-name"
                                name="last_name"
                                placeholder="Your last name"
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


                    <!-- SUBJECT -->

                    <div class="form-group">

                        <label for="subject">
                            Subject
                        </label>

                        <select
                            id="subject"
                            name="subject"
                            required
                        >

                            <option value="">
                                Select a subject
                            </option>

                            <option value="order">
                                Order Question
                            </option>

                            <option value="product">
                                Product Information
                            </option>

                            <option value="delivery">
                                Delivery Question
                            </option>

                            <option value="return">
                                Return / Refund
                            </option>

                            <option value="other">
                                Other
                            </option>

                        </select>

                    </div>


                    <!-- MESSAGE -->

                    <div class="form-group">

                        <label for="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Tell us how we can help..."
                            required
                        ></textarea>

                    </div>


                    <!-- SUBMIT -->

                    <button
                        type="submit"
                        class="contact-submit"
                    >

                        Send Message
                        →

                    </button>


                    <p class="form-note">
                        🔒 Your information is kept private
                        and secure.
                    </p>

                </form>

            </div>

            <!-- =================================================
                SUCCESS MESSAGE
            ================================================== -->

            <div
                id="contact-success"
                class="contact-success"
                hidden
            >

                <div class="success-icon">
                    ✓
                </div>

                <span class="section-label">
                    MESSAGE SENT
                </span>

                <h2>
                    Thank you for
                    <span>reaching out!</span>
                </h2>

                <p>
                    We've received your message and our team
                    will get back to you as soon as possible.
                </p>

                <div class="success-info">

                    <div>
                        ✉
                    </div>

                    <span>
                        We usually respond within
                        <strong>24 hours</strong>.
                    </span>

                </div>

                <button
                    type="button"
                    class="send-another"
                    id="send-another"
                >
                    Send Another Message
                </button>

            </div>

        </div>

    </section>



    <!-- =================================================
         FAQ / HELP
    ================================================== -->

    <section class="contact-help">

        <div class="contact-help-content">

            <span class="section-label">
                NEED HELP?
            </span>

            <h2>
                We've got
                <span>you covered.</span>
            </h2>

            <p>
                Looking for information about delivery,
                returns or your order?
            </p>


            <div class="help-grid">


                <a
                    href="#"
                    class="help-card"
                >

                    <div>
                        📦
                    </div>

                    <h3>
                        Track Your Order
                    </h3>

                    <p>
                        Check the status of your
                        latest GiftHub order.
                    </p>

                    <span>
                        Learn More →
                    </span>

                </a>


                <a
                    href="#"
                    class="help-card"
                >

                    <div>
                        🔄
                    </div>

                    <h3>
                        Returns & Refunds
                    </h3>

                    <p>
                        Find out about our return
                        and refund process.
                    </p>

                    <span>
                        Learn More →
                    </span>

                </a>


                <a
                    href="shop.php"
                    class="help-card"
                >

                    <div>
                        🎁
                    </div>

                    <h3>
                        Find a Gift
                    </h3>

                    <p>
                        Still looking for something
                        special?
                    </p>

                    <span>
                        Shop Gifts →
                    </span>

                </a>

            </div>

        </div>

    </section>



    <!-- =================================================
         CONTACT CTA
    ================================================== -->

    <section class="contact-cta">

        <div class="contact-cta-content">

            <span class="section-label">
                GIFTHUB
            </span>

            <h2>
                Have a special moment
                <span>coming up?</span>
            </h2>

            <p>
                Let us help you find something
                they'll remember.
            </p>

            <a
                href="shop.php"
                class="contact-button"
            >

                Explore Gifts
                →

            </a>

        </div>

    </section>


</main>


<?php include "../components/footer/footer.php"; ?>


<script>

const contactForm =
    document.getElementById("contact-form");

const contactFormWrapper =
    document.getElementById("contact-form-wrapper");

const contactSuccess =
    document.getElementById("contact-success");

const sendAnother =
    document.getElementById("send-another");


// ================= SUBMIT =================

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Hide form

    contactFormWrapper.hidden = true;


    // Show success message

    contactSuccess.hidden = false;


    // Scroll to success message

    contactSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    // Reset form for next use

    contactForm.reset();

});



sendAnother.addEventListener("click", function() {

    // Hide success

    contactSuccess.hidden = true;


    // Show form

    contactFormWrapper.hidden = false;


    // Scroll back to form

    contactFormWrapper.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

</script>


</body>

</html>