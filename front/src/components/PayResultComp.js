
import { useState } from "react";

const PayResultComp = ({url}) => {

  return (
    <>
      <div class="pay-result-container">
        <div class="pay-result-item">
          <div class="item-img">
            <img src={url} />
          </div>
          <div class="item-option-container">
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
          </div>
          <div class="item-info-container">
            <div class="item-count"><span>1</span></div>
            <div class="item-name">아메리카노</div>
          </div>
        </div>
        {/* <!-- 지울부분 --> */}
        <div class="pay-result-item">
          <div class="item-img">
            <img src={url} />
          </div>
          <div class="item-option-container">
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
          </div>
          <div class="item-info-container">
            <div class="item-count"><span>1</span></div>
            <div class="item-name">아메리카노</div>
          </div>
        </div>
        <div class="pay-result-item">
          <div class="item-img">
            <img src={url} />
          </div>
          <div class="item-option-container">
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
          </div>
          <div class="item-info-container">
            <div class="item-count"><span>1</span></div>
            <div class="item-name">아메리카노</div>
          </div>
        </div>
        <div class="pay-result-item">
          <div class="item-img">
            <img src={url} />
          </div>
          <div class="item-option-container">
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
          </div>
          <div class="item-info-container">
            <div class="item-count"><span>1</span></div>
            <div class="item-name">아메리카노</div>
          </div>
        </div>
        <div class="pay-result-item">
          <div class="item-img">
            <img src={url} />
          </div>
          <div class="item-option-container">
            <p>
              <span class="option-name">에스프레소</span>
              <span class="option-count">1</span>
              <span class="option-unit">샷</span>
            </p>
          </div>
          <div class="item-info-container">
            <div class="item-count"><span>1</span></div>
            <div class="item-name">아메리카노</div>
          </div>
        </div>
        {/* <!-- 지울부분 --> */}
      </div>
    </>
  );
}

export default PayResultComp;