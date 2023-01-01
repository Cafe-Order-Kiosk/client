
import { useState } from "react";

const PayStep2Modal = () => {

  return (
    <>
      <div class="pay-step-modal">
        <div class="pay-select-info-div">
          <p class="pay-step-level">STEP 2.</p>
          <p class="pay-step-text">결제 방식을 선택해주세요.</p>
          <div class="pay-step-btn-container">
            <div class="p-p-credit">
              <p>체크카드/신용카드</p>
            </div>
            <div class="p-p-point">
              <span>포인트카드/상품권</span>
            </div>
            <div class="p-p-gifticon">
              <span>기프티콘</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayStep2Modal;