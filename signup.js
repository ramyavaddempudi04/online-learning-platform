document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("#signupForm");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const existingUser = localStorage.getItem(email);

    if (existingUser) {
      alert("You already signed up! Redirecting to login page...");
      window.location.href = "./login.html"; 
    } else {
      localStorage.setItem(email, JSON.stringify({ name, email, password }));
      alert("You have signed up successfully!");
      window.location.href = "./login.html"; 
      signupForm.reset();
    }
  });
});
