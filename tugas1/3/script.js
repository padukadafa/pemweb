document
  .getElementById("validationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("nameError").classList.add("hidden");
    document.getElementById("emailError").classList.add("hidden");
    document.getElementById("passwordError").classList.add("hidden");

    let isValid = true;

    if (name.length <= 3) {
      document.getElementById("nameError").textContent =
        "Nama harus lebih dari 3 karakter.";
      document.getElementById("nameError").classList.remove("hidden");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Email tidak valid.";
      document.getElementById("emailError").classList.remove("hidden");
      isValid = false;
    }

    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password harus minimal 8 karakter.";
      document.getElementById("passwordError").classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      alert("Form berhasil dikirim!");
    }
  });
