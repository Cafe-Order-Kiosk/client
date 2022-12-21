// 이전으로 버튼
// let backMenuBtn = document.querySelector(".back-menu-btn");
// if (backMenuBtn != null) {
//   backMenuBtn.addEventListener("click", () => {
//     location.href = "/menu-view.html";
//   });
// }

// 결제취소 버튼
let payCancelBtn = document.querySelector(".pay-cancel-btn");
if (payCancelBtn != null) {
  payCancelBtn.addEventListener("click", () => {
    location.href = "/category.html";
  });
}

// 모달창 뒤에 검은색 뜨는거 처리
let background2 = document.getElementById("background");
background2.addEventListener("click", () => {
  closePayModal();
});
function closePayModal() {
  addHide(background);
  addHide(payStep1Modal);
  addHide(payStep2Modal);
  addHide(payProgressModal);
  addHide(payStep3Modal);
  addHide(payDialModal);
  addHide(payLoginModal);
  addHide(payRegistModal);
  clearInterval(timer);

  // payStep1Modal.setAttribute("style", "display:none;");
  // payStep2Modal.setAttribute("style", "display : none;");
  // payProgressModal.setAttribute("style", "display : none;");
  // payStep3Modal.setAttribute("style", "display : none;");
  // payDialModal.setAttribute("style", "display : none;");
  // payLoginModal.setAttribute("style", "display : none;");
  // payRegistModal.setAttribute("style", "display : none;");
  // adminEditorModal.setAttribute("style", "display : none;");
  // 쭉.. none!
}

let nextStep = null;
// 지금 누른게 어떤 버튼인지 판단하는 함수
function continueNextStep(el) {
  if (el == payStep1Modal) {
    moveStep2();
  } else if (el == payStep2Modal) {
    moveStep3Modal();
  } else {
    console.log("잘못된 엘리먼트 입력....");
  }
}

// step 1. 기능
// 결제하기 누르면 멤버십 사용할 건지 묻는 창 나오는 기능
let payStep1Modal = document.getElementById("pay-step1-modal");
document.querySelector(".do-pay-btn").addEventListener("click", () => {
  // payStep1Modal.setAttribute("style", "display : ;");
  removeHide(payStep1Modal);
  // background.setAttribute("style", "display : ;");
  removeHide(background);
});

// 결제버튼 중 아무거나 클릭하면 일단 결제 방식으로 넘어가게 설정
// 휴대폰
// p-m-telephone
let payDialModal = document.getElementById("pay-dial-modal");
let PMTelephone = document.getElementById("p-m-telephone");
PMTelephone.addEventListener("click", (e) => {
  nextStep = payStep1Modal;
  addHide(payStep1Modal);
  // payStep1Modal.setAttribute("style", "display:none;");
  // payDialModal.setAttribute("style", "display : ;");
  removeHide(payDialModal);
});

// 전화 번호 입력 받는 함수
// 전화 번호 입력 받는 함수
let dialWindow = document.querySelector("#pay-dial-modal > .dial-container > .dial-window>span");
let phoneNumberClearBtn = document.querySelector("#pay-dial-modal > .dial-container > .dial-window>div");
let dialButtons = document.querySelectorAll(
  "#pay-dial-modal > .dial-container > .dial-grid-container > .grid-item > span"
);
dialButtons.forEach((el) => {
  // console.log(el);
  // console.dir(el.innerText);
  if (!isNaN(el.innerText)) {
    el.addEventListener("click", (e) => {
      // console.dir(e.target);
      let text = e.target.innerText;
      // console.log(text);
      if (dialWindow.innerText.length < 12) {
        dialWindow.innerText = dialWindow.innerText.trim();
        dialWindow.innerText += text;
        dialWindow.innerText = dialWindow.innerText
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
      }
      closeBtnListener();
    });
  } else if (el.innerText == "←") {
    el.addEventListener("click", () => {
      let dialText = dialWindow.innerText;
      dialWindow.innerText = dialText.substr(0, dialText.length - 1);
      closeBtnListener();
    });
  } else {
    el.addEventListener("click", () => {
      if (dialWindow.innerText.length == 13) {
        dialWindow.innerText = "";
        closeBtnListener();
        alert("포인트가 적립되었습니다. :)");
        continueNextStep(nextStep);
      } else {
        alert("휴대전화 번호를 올바르게 입력해주세요!");
      }
    });
  }
});

function closeBtnListener() {
  if (dialWindow.innerText.length > 0) {
    if (phoneNumberClearBtn.classList.contains("hide")) {
      phoneNumberClearBtn.classList.remove("hide");
    }
  } else {
    phoneNumberClearBtn.classList.add("hide");
  }
}

// x 버튼 누르면 전화번호 초기화
phoneNumberClearBtn.addEventListener("click", () => {
  dialWindow.innerText = "";
  phoneNumberClearBtn.classList.add("hide");
});

// 바코드
// p-m-barcode
let barcodeModal = document.getElementById("pay-barcode-modal");
let PMBarcode = document.getElementById("p-m-barcode");
PMBarcode.addEventListener("click", () => {
  // alert("준비중!");
  // nextStep = payStep1Modal;
  // addHide(payStep1Modal);
  // removeHide(barcodeModal);

  // setTimeout(() => {
  //   continueNextStep(nextStep);
  // }, 3000);
  showBarcodeModal(payStep1Modal);
});

// 바코드 보여주는 함수
function showBarcodeModal(el) {
  nextStep = el;
  addHide(el);
  removeHide(barcodeModal);

  setTimeout(() => {
    continueNextStep(el);
    addHide(barcodeModal);
  }, 3000);
}

// 사용안함
let PMNot = document.getElementById("p-m-not");
PMNot.addEventListener("click", () => {
  addHide(payStep1Modal);
  // payStep1Modal.setAttribute("style", "display:none;");
  // payStep2Modal.setAttribute("style", "display : ;");
  removeHide(payStep2Modal);
});

// step 2. 이동 함수
function moveStep2() {
  addHide(payStep1Modal);
  addHide(payDialModal);
  addHide(barcodeModal);
  removeHide(payStep2Modal);
}

// step 2. 기능
// 결제 방식 누르면 신용카드 모달 보이게!
let payStep2Modal = document.getElementById("pay-step2-modal");
// 신용카드
let creditCardBtn = document.querySelector("#step2-btn-container>.p-p-credit");
creditCardBtn.addEventListener("click", () => {
  addHide(payStep2Modal);
  // console.log(payStep2Modal.id);
  // payStep2Modal.setAttribute("style", "display:none;");
  // payProgressModal.setAttribute("style", "display : ;");
  removeHide(payProgressModal);
  moveStep3Modal();
});

// 포인트카드
let pointCardBtn = document.querySelector("#step2-btn-container>.p-p-point");
pointCardBtn.addEventListener("click", () => {
  // alert("준비중!");
  showBarcodeModal(payStep2Modal);
});

// 기프티콘
let gifticonBtn = document.querySelector("#step2-btn-container>.p-p-gifticon");
gifticonBtn.addEventListener("click", () => {
  // alert("준비중!");
  showBarcodeModal(payStep2Modal);
});

// buttonsStep2.forEach((el) => {
//   el.addEventListener("click", () => {
//     addHide(payStep2Modal);
//     // payStep2Modal.setAttribute("style", "display:none;");
//     // payProgressModal.setAttribute("style", "display : ;");
//     removeHide(payProgressModal);
//     moveStep3Modal();
//   });
// });

let timer;
// step process. 기능
let payProgressModal = document.getElementById("pay-progress-modal");
function moveStep3Modal() {
  setTimeout(() => {
    addHide(payProgressModal);
    // payProgressModal.setAttribute("style", "display : ;");
    // payStep3Modal.setAttribute("style", "display : ;");
    removeHide(payStep3Modal);

    let timeSpan = document.getElementById("mileage-time");
    timeSpan.textContent = "10";

    timer = setInterval(() => {
      let time = timeSpan.textContent;

      if (time <= 0) {
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
  addHide(payStep3Modal);
  // payStep3Modal.setAttribute("style", "display : none;");
  // payLoginModal.setAttribute("style", "display : ;");
  removeHide(payLoginModal);
  clearInterval(timer);
});

// 적립은 됐어요..
let PMCNo = document.getElementById("p-m-c-no");
PMCNo.addEventListener("click", () => {
  location.href = "/home.html";
});

/* 수정 노트 */
// buttonsStep1에 지정된 이벤트 3개 전부 다 다르게 분해
// buttonsStep2에 지정된 이벤트 체크는 카드 보이게, 포인트는 바코드 UI 보이게
// buttonsStep3에 적립할게요 버튼에 이벤트 리스너 추가

/* 로그인 함수 (임시) */
// let loginBtn = document.getElementById("login-btn");
// let idInput = document.getElementById("id-input");
// let adminBtn = document.querySelector(".admin-menu-container > .edit-menu-btn");
// loginBtn.addEventListener("click", () => {
//   if (idInput.value == "admin") {
//     alert("로그인 성공");
//     closePayModal();
//     console.dir(adminBtn);
//     adminBtn.classList.remove("hidden");
//   } else {
//     alert("로그인에 실패했습니다...");
//   }
// });

/* 비밀번호를 잊으셨나요 ? */
let payRegistModal = document.getElementById("pay-regist-modal");
let userInfoFindFirst = document.querySelector(".user-info-find > p:last-child");
userInfoFindFirst.addEventListener("click", () => {
  addHide(payLoginModal);
  // payLoginModal.setAttribute("style", "display:none;");
  // payRegistModal.setAttribute("style", "display : ;");
  removeHide(payRegistModal);
});
