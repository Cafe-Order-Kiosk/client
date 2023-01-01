
import { useState } from "react";

const ChooseItemComp1 = ({url}) => {  

  return (
    <>
      <div class="choose-item-modal hide">
        <div class="item-top-container">
          <img class="item-img" />
          <div class="item-info-container">
            <div class="text-components">
              <div class="menu-count-container">
                <div class="item-minus-btn">
                  <span>-</span>
                </div>
                <span class="item-counts">1</span>
                <div class="item-plus-btn">
                  <span>+</span>
                </div>
              </div>
              <div class="item-name">아메리카노</div>
            </div>
            <div class="item-details-container">
              <ul class="item-details">
                <li class="item-detail-li">
                  <span class="item-option-name">에스프레소 샷</span>
                  <span class="item-option-count">1</span>
                  <span class="item-option-unit">개</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="item-separator" />
        <div class="item-body-container" id="choose-item-step1">
          <p>고객님의 레시피를 선택해주세요</p>
          <div class="choose-simple-container">
            <div class="choose-default-div">
              <div class="choose-default-btn">
                <img src={url[0]} />
                <p>기본 레시피</p>
              </div>
            </div>
            <div class="choose-custom-div">
              <div class="choose-custom-btn">
                <img src={url[1]} />
                <p>마이 레시피</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseItemComp1;