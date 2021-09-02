window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".text-title").innerHTML =
      "Activating Plugins .....";
  }, 2000);
  setTimeout(function () {
    document.querySelector(".text-title").innerHTML = "Loading enviroment";
    document.querySelector(".loader-ask").innerHTML = "We are almost there";
  }, 3500);
  setTimeout(function () {
    document.querySelector(".text-title").innerHTML = "System online";
    document.querySelector(".loader-ask").innerHTML =
      "This is a  product of techkey";
  }, 5000);
  setTimeout(function () {
    document.querySelector(".preloader").remove();
  }, 8000);
});
console.log("hi");
