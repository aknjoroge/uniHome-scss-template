let loginHeaderBtn = document.getElementById("login-state-btn");
let imagePrev = document.getElementById("image-prev");
let imageNext = document.getElementById("image-next");
let imageContainer = document.querySelector(".img-array");

if (loginHeaderBtn) {
  loginHeaderBtn.addEventListener("click", function (e) {
    e.preventDefault();

    location.assign("/users/login.html");
  });
}
if (imageNext && imagePrev) {
  let positions = [0, 1, 2];
  let active = 0;
  let pixels = 200;
  imageNext.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(active);
    if (active == positions.length - 1) {
      active = 0;
      imageContainer.style.transform = `translateX(0)`;
    } else {
      imageContainer.style.transform = `translateX(-${
        pixels * (active + 1)
      }px)`;
      active++;
    }
  });
  imagePrev.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(active);
    if (active == 0) {
      imageContainer.style.transform = `translateX(-${
        pixels * (positions.length - 1)
      }px)`;
      active = 2;
    } else {
      active--;
      imageContainer.style.transform = `translateX(-${pixels * active}px)`;
    }
  });
}
