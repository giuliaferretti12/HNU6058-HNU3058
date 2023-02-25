// on initialise le SDK (software development kit) de EmailJS avec notre ID utilisateur
emailjs.init("your_user_id");

// on envoie un email lorsque le formulaire est soumis
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // on obtient des données de formulaire
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // on envoie des e-mails en utilisant EmailJS
  emailjs.send("your_service_id", "your_template_id", {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(function(response) {
    console.log("Email sent successfully!");
    document.getElementById("contact-form").reset();
  }, function(error) {
    console.error("Error sending email:", error);
    alert("There was an error sending your email. Please try again later.");
  });
});