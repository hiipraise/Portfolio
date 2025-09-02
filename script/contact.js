// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs
    .send("service_j4wjvkh", "template_apistmq", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        // Show notification
        const notification = document.getElementById("notification");
        notification.style.display = "block";

        // Optionally clear form fields
        document.getElementById("contactForm").reset();

        // Hide notification after 5 seconds
        setTimeout(() => {
          notification.style.display = "none";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      }
    );
});

(function () {
  emailjs.init("OYHqlCOdK50Qc1_9W"); // Replace with EmailJS user ID
})();
