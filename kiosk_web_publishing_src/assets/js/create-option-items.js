// 옵션들 스크립트로 자동 추가
const optionsContainer = document.querySelector(".options-container");
for (let i = 0; i < 10; i++) {
  let optionItem = document.createElement("div");
  optionItem.setAttribute("class", "option-item");

  let optionInfoDiv = document.createElement("div");
  optionInfoDiv.setAttribute("class", "option-info-div");

  let optionName = document.createElement("div");
  optionName.textContent = "에스프레소 샷";
  optionName.setAttribute("class", "option-name");

  let optionPrice = document.createElement("div");
  optionPrice.setAttribute("class", "option-price");

  let span = document.createElement("span");
  span.textContent = "500원";
  optionPrice.appendChild(span);

  optionInfoDiv.appendChild(optionName);
  optionInfoDiv.appendChild(optionPrice);
  optionItem.appendChild(optionInfoDiv);

  let optionCountContainer = document.createElement("div");
  optionCountContainer.classList.add("option-count-container");

  let optionMinusBtn = document.createElement("div");
  optionMinusBtn.textContent = "-";
  optionMinusBtn.classList.add("option-minus-btn");
  let optionCount = document.createElement("div");
  optionCount.textContent = "1";
  optionCount.classList.add("option-count");
  let optionPlusBtn = document.createElement("div");
  optionPlusBtn.textContent = "+";
  optionPlusBtn.classList.add("option-plus-btn");

  optionCountContainer.appendChild(optionMinusBtn);
  optionCountContainer.appendChild(optionCount);
  optionCountContainer.appendChild(optionPlusBtn);

  optionItem.appendChild(optionCountContainer);

  optionsContainer.appendChild(optionItem);
}
