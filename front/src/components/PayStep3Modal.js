
import { useState } from "react";

const PayStep3Modal = () => {

  return (
    <>
      <div class="pay-step-modal">
        <div class="pay-select-info-div">
          <p class="pay-step-level">STEP 3.</p>
          <p class="pay-step-text">포인트를 적립하시겠어요?</p>
          <div class="pay-step-btn-container p-m-c-container">
            <div class="p-m-c-ok">
              <p>적립할게요!</p>
            </div>
            <div class="p-m-c-no">
              <span>적립은 됐어요...</span>
            </div>
          </div>
          <p class="p-m-c-timer">
            <span id="mileage-time"></span>
            초 후에 창이 닫힙니다...
          </p>
        </div>
      </div>
    </>
  )
}

export default PayStep3Modal;