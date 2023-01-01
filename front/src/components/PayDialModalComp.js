
import { useState } from "react";

const PayDialModalComp = () => {

  return (
    <>
      <div class="pay-step-modal" id="pay-dial-modal">
        <div class="dial-container">
          <p>휴대폰 번호를 입력해주세요</p>
          <div class="dial-window">
            <span></span>
            <div class="clear-phone-number hide">
              <span>x</span>
            </div>
          </div>
          <div class="dial-grid-container">
            <div class="grid-item">
              <span>1</span>
            </div>
            <div class="grid-item">
              <span>2</span>
            </div>
            <div class="grid-item">
              <span>3</span>
            </div>
            <div class="grid-item">
              <span>4</span>
            </div>
            <div class="grid-item">
              <span>5</span>
            </div>
            <div class="grid-item">
              <span>6</span>
            </div>
            <div class="grid-item">
              <span>7</span>
            </div>
            <div class="grid-item">
              <span>8</span>
            </div>
            <div class="grid-item">
              <span>9</span>
            </div>
            <div class="grid-item edit-number-btn">
              <span>←</span>
            </div>
            <div class="grid-item">
              <span>0</span>
            </div>
            <div class="grid-item confirm-number-btn">
              <span>확인</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayDialModalComp;