
import { useState } from "react";

const PayLoginModalComp = () => {

  return (
    <>
      <div class="pay-step-modal hide" id="pay-login-modal">
        <div class="pay-login-container">
          <p>회원인증</p>
          <div class="id-input-div">
            <label for="id-input">아이디</label>
            <input type="text" id="id-input" />
          </div>
          <div class="pwd-input-div">
            <label for="pwd-input">비밀번호</label>
            <input type="password" id="pwd-input" />
          </div>
          <div class="login-btn" id="login-btn">
            <p>로그인</p>
          </div>
          <div class="user-info-find">
            <p>비밀번호를 잊으셨나요?</p>
            <p>회원가입</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayLoginModalComp;