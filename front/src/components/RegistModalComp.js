
import { useState } from "react";

const RegistModalComp = () => {

  return (
    <>
      {/* <!-- 회원가입 모달 --> */}
      <div class="pay-step-modal hide" id="pay-regist-modal">
        <div class="pay-regist-container">
          <div class="tos-check-box">
            <div class="check-btn">
              <span>V</span>
            </div>
            <p>본인확인 서비스 이용약관 전체 동의</p>
          </div>
          <div class="id-input-div">
            <label for="id-input">아이디</label>
            <input type="text" id="id-input" />
          </div>
          <div class="pwd-input-div">
            <label for="pwd-input">비밀번호</label>
            <input type="password" id="pwd-input" />
          </div>
          <p>휴대폰 정보</p>
          <div class="phone-input-div">
            <select class="news-agency-select">
              <option>SKT</option>
              <option>KT</option>
              <option>LG U+</option>
              <option>알뜰폰</option>
            </select>
            <input type="tel" id="tel-input" />
          </div>
          <div class="send-cert-phone">
            <span>인증번호발송</span>
          </div>
          <div class="do-regist-btn">
            <span>인증완료</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistModalComp;