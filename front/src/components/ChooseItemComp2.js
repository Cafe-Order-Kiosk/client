
import { useState } from "react";

const ChooseItemComp2 = () => {

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
        <div class="item-body-container" id="choose-item-step2">
          <div class="custom-recipe-container">
            <div class="size-menu-container">
              <p>사이즈를 선택해주세요</p>
              <div class="size-btn-div">
                <div><img src="/assets/img/coffee.png" alt="" /></div>
                <div><img src="/assets/img/coffee.png" alt="" /></div>
                <div><img src="/assets/img/coffee.png" alt="" /></div>
              </div>
            </div>
            <div class="options-container">
              <div class="option-item">
                <div class="option-info-div">
                  <div class="option-name">에스프레소 샷</div>
                  <div class="option-price"><span>500원</span></div>
                </div>
                <div class="option-count-container">
                  <div class="option-minus-btn">-</div>
                  <div class="option-count">1</div>
                  <div class="option-plus-btn">+</div>
                </div>
              </div>
            </div>
            <div class="confirm-btn-container">
              <div class="item-cancel-btn">취소하기</div>
              <div class="item-confirm-btn">골라담기</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseItemComp2;