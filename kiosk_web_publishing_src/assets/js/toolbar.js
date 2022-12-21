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

// 관리자 메뉴 함수
let editMenuBtn = document.querySelector(".menu-tool-bar > .admin-menu-container > .edit-menu-btn");
let adminEditorModal = document.getElementById("admin-editor-modal");
editMenuBtn.addEventListener("click", () => {
  removeHide(adminEditorModal);
  removeHide(background);
});

// 디스플레이 ON/OFF 함수
function addHide(el) {
  el.classList.add("hide");
}
function removeHide(el) {
  el.classList.remove("hide");
}

// 백그라운드 모달 닫기 함수
let background = document.getElementById("background");
background.addEventListener("click", () => {
  closeBackground();
});

function closeBackground() {
  addHide(background);
  addHide(adminEditorModal);
  if (chooseItemModal) addHide(chooseItemModal);
  if (typeof closeModal == "function") {
    closeModal();
    //console.log(typeof closeModal);
  }
  addHide(loginModal);
  addHide(registModal);
}

/* footer 기능들 */
let payBtn = document.querySelector(".pay-btn");
if (payBtn != null) {
  payBtn.addEventListener("click", () => {
    location.href = "/pay-result.html";
  });
}

/* 관리자 메뉴 기능 */
// 관리자 메뉴 등록 완료 함수
let registProductButton = document.querySelector("#admin-editor-modal > .item-register-btn");
registProductButton.addEventListener("click", () => {
  alert("등록되었습니다!");
  closeBackground();
});

// menu-view.js 에 있던 함수인데 잠시 가져옴.. 추후 삭제...
const chooseItemModal = document.querySelector(".choose-item-modal");
// const background = document.querySelector(".background");
if (chooseItemModal != null) {
  document.querySelectorAll(".product").forEach((el) => {
    el.addEventListener("click", function () {
      removeHide(chooseItemModal);
      // chooseItemModal.setAttribute("style", "display: ;");
      // background.setAttribute("style", "display: ;");
      removeHide(background);
    });
  });
}

// 로그인 모달 함수
let loginModal = document.getElementById("pay-login-modal");
let brandName = document.querySelector(".brand-name > span");
brandName.addEventListener("dblclick", () => {
  alert("관리자 로그인 후 이용할 수 있는 기능입니다.");
  removeHide(loginModal);
  removeHide(background);
});

// 회원가입 모달 함수
/* 비밀번호를 잊으셨나요 ? */
let registModal = document.getElementById("pay-regist-modal");
let InfoFindFirst = document.querySelector(".user-info-find > p:last-child");
InfoFindFirst.addEventListener("click", () => {
  addHide(loginModal);
  // payLoginModal.setAttribute("style", "display:none;");
  // payRegistModal.setAttribute("style", "display : ;");
  removeHide(registModal);
});

// 로그인 함수
// pay-result.js로 부터 가져옴
let loginBtn = document.getElementById("login-btn");
let idInput = document.getElementById("id-input");
let adminBtn = document.querySelector(".admin-menu-container > .edit-menu-btn");
loginBtn.addEventListener("click", () => {
  if (idInput.value == "admin") {
    alert("로그인 성공");
    if (typeof closePayModal == "function") closePayModal();
    closeBackground();
    adminBtn.classList.remove("hidden");
  } else {
    alert("로그인에 실패했습니다...");
  }
});
