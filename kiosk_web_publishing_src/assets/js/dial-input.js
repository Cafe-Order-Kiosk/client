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
      dialWindow.innerText = "";
      closeBtnListener();
      alert("확인");
      //closePayModal();
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
