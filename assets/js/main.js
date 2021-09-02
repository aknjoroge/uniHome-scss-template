let homePage = document.querySelector(".home-page");
let loginPage = document.querySelector(".login-page");
let detailsPage = document.querySelector(".details-page");
let housePage = document.querySelector(".myhouse-page");
let profilePage = document.querySelector(".profile-page");

window.addEventListener("load", function () {
  if (homePage) {
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "Loading enviroment";
      document.querySelector(".loader-ask").innerHTML = "We are almost there";
    }, 1000);
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "System online";
      document.querySelector(".loader-ask").innerHTML =
        "This is a  product of Techkey Cybenetics";
    }, 2000);
    setTimeout(function () {
      document.querySelector(".preloader").remove();
    }, 3500);
  }
  if (loginPage) {
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "Updating Encryptions";
      document.querySelector(".loader-ask").innerHTML = "Almost there";
    }, 1000);
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "Updated";
      document.querySelector(".loader-ask").innerHTML = "Done";
    }, 1500);
    setTimeout(function () {
      document.querySelector(".preloader").remove();
    }, 2000);
  }
  if (detailsPage) {
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "Data Received";
      document.querySelector(".loader-ask").innerHTML = "Almost there";
    }, 1000);
    setTimeout(function () {
      document.querySelector(".preloader").remove();
    }, 1500);
  }
  if (housePage) {
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "Payment Read";
      document.querySelector(".loader-ask").innerHTML = "Details Received";
    }, 1000);
    setTimeout(function () {
      document.querySelector(".preloader").remove();
    }, 1500);
  }
  if (profilePage) {
    setTimeout(function () {
      document.querySelector(".text-title").innerHTML = "Here you are";
      document.querySelector(".loader-ask").innerHTML = "Hallo";
    }, 1000);
    setTimeout(function () {
      document.querySelector(".preloader").remove();
    }, 1500);
  }
});
