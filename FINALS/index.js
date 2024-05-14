const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "max@gmail.com" && password === "max123") {
    window.location.href = "HOME.html"
  } else {
    alert("Invalid username or password.");
  }
});