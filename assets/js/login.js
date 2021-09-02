let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");
let resetForm = document.getElementById("resetForm");
let signUpBtn = document.getElementById("signup-btn");
let backtoLoginbtn = document.getElementById("register-login-btn");
let loginContainer = document.querySelector(".loginForm");
let resetPasswordModal = document.querySelector(".modal");
let resetPasswordBackdrop = document.querySelector(".backdrop");
let closeModal = document.querySelector(".close-modal-btn");
let registerContainer = document.querySelector(".register-form");
let forgotPassbtn = document.getElementById("forgot-pass-btn");
let loginHeaderBtn = document.getElementById("login-state-btn");

function revealSignup() {
  loginContainer.classList.toggle("hidden");
  registerContainer.classList.toggle("hidden");

  if (loginHeaderBtn.innerHTML == "Register") {
    loginHeaderBtn.classList.remove("btn--green");
    loginHeaderBtn.classList.add("btn--blue");
    loginHeaderBtn.innerHTML = "Login";
  } else {
    loginHeaderBtn.classList.remove("btn--blue");
    loginHeaderBtn.classList.add("btn--green");
    loginHeaderBtn.innerHTML = "Register";
  }
}
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("at login");
  });
}
if (signUpBtn) {
  signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();

    revealSignup();
  });
}
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Register");
  });
}
if (backtoLoginbtn) {
  backtoLoginbtn.addEventListener("click", function (e) {
    e.preventDefault();

    revealSignup();
  });
}
if (resetForm) {
  resetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Reset Password");
  });
}
if (forgotPassbtn) {
  forgotPassbtn.addEventListener("click", function (e) {
    e.preventDefault();
    resetPasswordModal.classList.toggle("hidden");
  });
}

if (resetPasswordBackdrop) {
  resetPasswordBackdrop.addEventListener("click", function (e) {
    resetPasswordModal.classList.toggle("hidden");
  });
}
if (closeModal) {
  closeModal.addEventListener("click", function (e) {
    resetPasswordModal.classList.toggle("hidden");
  });
}
if (loginHeaderBtn) {
  loginHeaderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.innerHTML == "Login" || e.target.innerHTML == "Register") {
      revealSignup();
    }
  });
}
