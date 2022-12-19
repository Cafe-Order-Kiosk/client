// 아이템 상세 옵션에 실제 옵션 임의로 배정
const itemDetails = document.querySelector(".item-details");
for (let i = 0; i < 5; i++) {
  let li = document.createElement("li");
  li.classList.add("item-detail-li");

  let span1 = document.createElement("span");
  span1.classList.add("item-option-name");
  span1.textContent = "에스프레소 샷";

  let span2 = document.createElement("span");
  span2.classList.add("item-option-count");
  span2.textContent = " 1 ";

  let span3 = document.createElement("span");
  span3.classList.add("item-option-unit");
  span3.textContent = "개";

  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(span3);
  itemDetails.appendChild(li);
}
