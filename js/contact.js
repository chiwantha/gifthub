// =====================================================
// GIFTHUB CONTACT FORM
// =====================================================

// ================= ELEMENTS =================

const contactForm = document.getElementById("contact-form");

const contactFormWrapper = document.getElementById("contact-form-wrapper");

const contactSuccess = document.getElementById("contact-success");

const sendAnother = document.getElementById("send-another");

// ================= CHECK ELEMENTS =================

if (contactForm && contactFormWrapper && contactSuccess && sendAnother) {
  // =================================================
  // FORM SUBMIT
  // =================================================

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Hide form

    contactFormWrapper.hidden = true;

    // Show success message

    contactSuccess.hidden = false;

    // Scroll to success message

    contactSuccess.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Clear form

    contactForm.reset();
  });

  // =================================================
  // SEND ANOTHER MESSAGE
  // =================================================

  sendAnother.addEventListener("click", function () {
    // Hide success message

    contactSuccess.hidden = true;

    // Show form

    contactFormWrapper.hidden = false;

    // Scroll to form

    contactFormWrapper.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}
