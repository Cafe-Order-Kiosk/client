
import { useState } from "react";

const PayStep1Modal = () => {

  return (
    <>
      <div class="pay-step-modal" id="pay-step1-modal">
        <div class="pay-select-info-div">
          <p class="pay-step-level">STEP 1.</p>
          <p class="pay-step-text">멤버스 포인트를 사용하시나요?</p>
          <div class="pay-step-btn-container">
            <div class="p-m-telephone">
              <span>휴대 전화</span>
            </div>
            <div class="p-m-barcode">
              <span>바코드</span>
            </div>
            <div class="p-m-not">
              <span>사용 안함</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayStep1Modal;