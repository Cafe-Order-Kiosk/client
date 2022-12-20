/* header 기능들 */
let catBtn = document.querySelector(".cat-btn");
if (catBtn != null) {
  catBtn.addEventListener("click", () => {
    location.href = "/category.html";
  });
}

let homeBtn = document.querySelector(".home-btn");
if (homeBtn != null) {
  homeBtn.addEventListener("click", () => {
    location.href = "/home.html";
  });
}

/* footer 기능들 */
let payBtn = document.querySelector(".pay-btn");
if (payBtn != null) {
  payBtn.addEventListener("click", () => {
    location.href = "/pay-result.html";
  });
}
