let background2 = document.querySelector(".background2");
background2.addEventListener("click", () => {
  moveCategory();
});
let homeText = document.querySelector(".home-text");
homeText.addEventListener("click", () => {
  moveCategory();

})
function moveCategory() {
  location.href = "/category.html";
}