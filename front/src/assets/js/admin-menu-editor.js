// 모든 리스트 아이템을 찾아 사용자 정의 속성값을 0으로 해줌
let editorListItems = document.querySelectorAll(".editor-list-item");
editorListItems.forEach((el) => {
  el.dataset.isVisible = 0;
});

// 드롭박스 버튼을 클릭하면 아래 메뉴들이 나오도록 설정
let editorOptionDropboxes = document.querySelectorAll(".option-dropbox-container > div:first-child");
editorOptionDropboxes.forEach((el) => {
  el.addEventListener("click", (e) => {
    let eDom = e.target.localName;
    // console.log(eDom);
    let listItem = null;

    if (eDom == "p") {
      let divEl = e.target.parentElement;
      listItem = divEl.nextElementSibling;
    } else {
      let divEl = e.target;
      listItem = divEl.nextElementSibling;
    }

    if (listItem.dataset.isVisible == 0) {
      listItem.setAttribute("style", "display : ;");
      listItem.dataset.isVisible = 1;
      listItem.classList.add("fade");
    } else {
      listItem.setAttribute("style", "display : none;");
      listItem.dataset.isVisible = 0;
      listItem.classList.remove("fade");
    }
  });
});

// 사이즈 버튼들 속성 //
// 사이즈 버튼 아래의 이미지들 사용자 정의 프로퍼티 초기화
let sizeBtnImgs = document.querySelectorAll(".size-btn > .check-btn > img ");
sizeBtnImgs.forEach((el) => {
  el.dataset.isVisible = 0;
  el.addEventListener("click", (e) => {
    e.target.classList.remove("is-checked");
  });
});

// 사이즈 버튼들 이벤트 리스너 추가
let sizeBtns = document.querySelectorAll(".size-btn");
sizeBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let target = e.target;
    console.dir(target);
    let sizeBtn = null;
    // console.log(target.className);
    if (target.className == "size-btn") {
      // console.log("버튼영역 클릭");
      sizeBtn = target;
    } else {
      // console.log("자식 영역 클릭");
      sizeBtn = target.parentElement;
    }
    let img = sizeBtn.childNodes[1].childNodes[1];
    if (img.dataset.isVisible == 0) {
      img.dataset.isVisible = 1;
      img.classList.add("is-checked");
    } else {
      img.dataset.isVisible = 0;
      img.classList.remove("is-checked");
    }
  });
});
