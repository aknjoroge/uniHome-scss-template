let ownersForm = document.getElementById("owners-login-form");
let resetForm = document.getElementById("resetForm");
let resetPasswordModal = document.querySelector(".modal");
let resetPasswordBackdrop = document.querySelector(".backdrop");
let closeModal = document.querySelector(".close-modal-btn");
let registerContainer = document.querySelector(".register-form");
let forgotPassbtn = document.getElementById("forgot-pass-btn");

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
if (ownersForm) {
  ownersForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("owner login");
  });
}
