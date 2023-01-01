// step1. 모달
// const chooseItemModal = document.querySelector(".choose-item-modal");
// // const background = document.querySelector(".background");
// document.querySelectorAll(".product").forEach((el) => {
//   el.addEventListener("click", function () {
//     removeHide(chooseItemModal);
//     // chooseItemModal.setAttribute("style", "display: ;");
//     // background.setAttribute("style", "display: ;");
//     removeHide(background);
//   });
// });

// background.addEventListener("click", () => {
//   closeModal();
// });

// 모달창과 백그라운드를 닫는 함수
function closeModal() {
  addHide(chooseItemModal);
  // chooseItemModal.setAttribute("style", "display: none");
  // background.setAttribute("style", "display: none");
  removeHide(chooseItemStep1);
  addHide(chooseItemStep2);
  addHide(background);
  // chooseItemStep1.setAttribute("style", "display: ;");
  // chooseItemStep2.setAttribute("style", "display: none");
}

// step2. 모달
const chooseItemStep1 = document.getElementById("choose-item-step1");
const chooseItemStep2 = document.getElementById("choose-item-step2");

const chooseCustomBtn = document.querySelector(".choose-custom-btn");
const chooseDefaultBtn = document.querySelector(".choose-default-btn");

chooseDefaultBtn.addEventListener("click", () => {
  alert("아이템이 장바구니에 담겼습니다 :)");
  closeModal();
});

chooseCustomBtn.addEventListener("click", () => {
  changeItemBody();
});

// 아이탬 프래그먼트 체인지
function changeItemBody() {
  addHide(chooseItemStep1);
  // chooseItemStep1.setAttribute("style", "display: none;");
  // chooseItemStep2.setAttribute("style", "display: ;");
  removeHide(chooseItemStep2);
}

// step2 모달의 취소나, 골라 담기 버튼 누르면 모달 닫히는 액션
const itemCancelBtn = document.querySelector(".item-cancel-btn");
const itemConfirmBtn = document.querySelector(".item-confirm-btn");
itemCancelBtn.addEventListener("click", () => {
  closeModal();
});
itemConfirmBtn.addEventListener("click", () => {
  alert("아이템이 장바구니에 담겼습니다 :)");
  closeModal();
});
