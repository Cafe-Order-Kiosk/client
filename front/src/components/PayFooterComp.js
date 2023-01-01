
import { useState } from "react";

const PayFooterComp = () => {

  return (
    <>
      <div class="pay-summary-container">
        <span class="total-cost-text">총 합계 금액</span>
        <span class="total-cost">13500
          <span class="pay-unit">원</span>
        </span>
      </div>
      <footer class="pay-footer">
        <div class="pay-btn-container">
          <div class="back-menu-btn" id="back-menu-btn">
            <p>이전으로</p>
          </div>
          <div class="pay-cancel-btn">
            <p>결제취소</p>
          </div>
          <div class="do-pay-btn">
            <p>결제하기</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PayFooterComp;