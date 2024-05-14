document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    document.getElementById("response").textContent = "Please fill out all fields.";
    document.getElementById("response").classList.add("error");
    return;
  }

  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  document.getElementById("response").textContent = "Email sent successfully!";
  document.getElementById("response").classList.remove("error");

  document.getElementById("contactForm").reset();
});