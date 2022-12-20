document.querySelector(".back-menu-btn").addEventListener("click", () => {
  location.href = "/menu-view.html";
});

document.querySelector(".pay-cancel-btn").addEventListener("click", () => {
  location.href = "/category.html";
});

let background = document.getElementById("background");
background.addEventListener("click", () => {
  closePayModal();
});
function closePayModal() {
  background.setAttribute("style", "display:none;");
  payStep1Modal.setAttribute("style", "display:none;");
  payStep2Modal.setAttribute("style", "display : none;");
  payProgressModal.setAttribute("style", "display : none;");
  payStep3Modal.setAttribute("style", "display : none;");
  payDialModal.setAttribute("style", "display : none;");
  payLoginModal.setAttribute("style", "display : none;");
  payRegistModal.setAttribute("style", "display : none;");
  // 쭉.. none!
}

// step 1. 기능
// 결제하기 누르면 멤버십 사용할 건지 묻는 창 나오는 기능
let payStep1Modal = document.getElementById("pay-step1-modal");
document.querySelector(".do-pay-btn").addEventListener("click", () => {
  payStep1Modal.setAttribute("style", "display : ;");
  background.setAttribute("style", "display : ;");
});

// 결제버튼 중 아무거나 클릭하면 일단 결제 방식으로 넘어가게 설정
// 휴대폰
// p-m-telephone
let payDialModal = document.getElementById("pay-dial-modal");
let PMTelephone = document.getElementById("p-m-telephone");
PMTelephone.addEventListener("click", () => {
  payStep1Modal.setAttribute("style", "display:none;");
  payDialModal.setAttribute("style", "display : ;");
});

// 바코드
// p-m-barcode
let PMBarcode = document.getElementById("p-m-barcode");
PMBarcode.addEventListener("click", () => {
  alert("준비중!");
});

// 사용안함
let PMNot = document.getElementById("p-m-not");
PMNot.addEventListener("click", () => {
  payStep1Modal.setAttribute("style", "display:none;");
  payStep2Modal.setAttribute("style", "display : ;");
});

// step 2. 기능
// 결제 방식 누르면 신용카드 모달 보이게!
let payStep2Modal = document.getElementById("pay-step2-modal");
let buttonsStep2 = document.querySelectorAll("#step2-btn-container>div");
buttonsStep2.forEach((el) => {
  el.addEventListener("click", () => {
    payStep2Modal.setAttribute("style", "display:none;");
    payProgressModal.setAttribute("style", "display : ;");
    moveStep3Modal();
  });
});

// step process. 기능
let payProgressModal = document.getElementById("pay-progress-modal");
function moveStep3Modal() {
  setTimeout(() => {
    payProgressModal.setAttribute("style", "display : ;");
    payStep3Modal.setAttribute("style", "display : ;");

    let timeSpan = document.getElementById("mileage-time");
    timeSpan.textContent = "10";

    let interval = setInterval(() => {
      let time = timeSpan.textContent;

      if (time <= 0) {
        clearInterval(interval);
        closePayModal();
        location.href = "/home.html";
        return;
      }
      time--;
      timeSpan.textContent = time;
    }, 1000);
  }, 1000);
}

// step 3. 기능
let payStep3Modal = document.getElementById("pay-step3-modal");
// 적립할게요
let PMCOk = document.getElementById("p-m-c-ok");
let payLoginModal = document.getElementById("pay-login-modal");
PMCOk.addEventListener("click", () => {
  payStep3Modal.setAttribute("style", "display : none;");
  payLoginModal.setAttribute("style", "display : ;");
});

// 적립은 됐어요..
let PMCNo = document.getElementById("p-m-c-no");
PMCNo.addEventListener("click", () => {
  closePayModal();
  location.href = "/category.html";
});

/* 수정 노트 */
// buttonsStep1에 지정된 이벤트 3개 전부 다 다르게 분해
// buttonsStep2에 지정된 이벤트 체크는 카드 보이게, 포인트는 바코드 UI 보이게
// buttonsStep3에 적립할게요 버튼에 이벤트 리스너 추가

/* 비밀번호를 잊으셨나요 ? */
let payRegistModal = document.getElementById("pay-regist-modal");
let userInfoFindFirst = document.querySelector(".user-info-find > p:first-child");
userInfoFindFirst.addEventListener("click", () => {
  payLoginModal.setAttribute("style", "display:none;");
  payRegistModal.setAttribute("style", "display : ;");
});
