
import { useState } from "react";

const PayProgressModalComp = () => {
  return (
    <>
      <div class="pay-step-modal hide">
        <div class="pay-select-info-div">
          <div class="pay-method-icons">
            <img src="/assets/img/credit-card.png" />
          </div>
          <p class="pay-guide-text">결제중입니다</p>
        </div>
      </div>
    </>
  )
}

export default PayProgressModalComp;