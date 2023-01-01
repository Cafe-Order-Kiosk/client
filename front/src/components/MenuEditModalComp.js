
import { useState } from "react";

const MenuEditModalComp = () => {

  return (
    <>
      {/* <!-- 메뉴 편집창 -->*/}
      <div class="admin-editor-modal hide" id="admin-editor-modal">
        <p>상품 등록</p>
        <div class="editor-ui-container">
          <div class="editor-option-container">
            <label class="editor-label" for="product-name-input">상품명</label>
            <input class="editor-input" id="product-name-input" />
          </div>
          <div class="editor-option-container">
            <label class="editor-label" for="product-list-select">종류</label>
            <div class="select-div">
              <select id="product-list-select">
                <option selected>선택해주세요</option>
                <option>커피메뉴</option>
                <option>NON커피메뉴</option>
                <option>TEA</option>
                <option>디저트/간식류</option>
              </select>
            </div>
          </div>
          <div class="editor-option-container">
            <label class="editor-label" for="product-price-input">가격</label>
            <input class="editor-input" type="number" id="product-price-input" />
          </div>
              {/* <!-- 아이템 드롭 박스 DOM UNIT--> */}
          <div class="option-dropbox-container">
            <div class="editor-option-dropbox" id="editor-option-dropbox">
              <p>V</p>
              <p>커피 옵션</p>
            </div>
            <div class="editor-list-item" style="display: none">
              <ul class="option-list-ul">
                <li class="option-list-li">
                  <span class="option-name">에스프레소 샷</span>
                  <div class="limit-control">
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                  </div>
                  <div class="choose-item">
                    <span>상세설정</span>
                    <span>추가</span>
                    <span>삭제</span>
                  </div>
                </li>
                {/*<!-- 지울부분 -->*/}
                {/*<!-- 지울부분 -->*/}
              </ul>
            </div>
          </div>
          {/*<!-- 아이템 드롭 박스 DOM UNIT--> */}
          <div class="option-dropbox-container">
            <div class="editor-option-dropbox" id="editor-option-dropbox">
              <p>V</p>
              <p>NON 커피 옵션</p>
            </div>
            <div class="editor-list-item" style="display: none">
              <ul class="option-list-ul">
                <li class="option-list-li">
                  <span class="option-name">코코넛 밀크</span>
                  <div class="limit-control">
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                  </div>
                  <div class="choose-item">
                    <span>상세설정</span>
                    <span>추가</span>
                    <span>삭제</span>
                  </div>
                </li>
                {/* <!-- 지울부분 --> */}
                {/* <!-- 지울부분 --> */}
              </ul>
            </div>
          </div>
          {/* <!-- 아이템 드롭 박스 DOM UNIT--> */}
          <div class="option-dropbox-container">
            <div class="editor-option-dropbox" id="editor-option-dropbox">
              <p>V</p>
              <p>시럽 추가</p>
            </div>
            <div class="editor-list-item" style="display: none">
              <ul class="option-list-ul">
                <li class="option-list-li">
                  <span class="option-name">헤이즐넛 시럽</span>
                  <div class="limit-control">
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                  </div>
                  <div class="choose-item">
                    <span>상세설정</span>
                    <span>추가</span>
                    <span>삭제</span>
                  </div>
                </li>
                {/* <!-- 지울부분 --> */}
                {/* <!-- 지울부분 --> */}
              </ul>
            </div>
          </div>
          <p class="size-title-text">사이즈</p>
          <div class="size-btn-container">
            <div class="size-btn">
              <div class="check-btn">
                <img />
              </div>
              <p class="size-name-text">small</p>
            </div>
            <div class="size-btn">
              <div class="check-btn">
                <img />
              </div>
              <p class="size-name-text">medium</p>
            </div>
            <div class="size-btn">
              <div class="check-btn">
                <img />
              </div>
              <p class="size-name-text">large</p>
            </div>
            <div class="size-btn">
              <div class="check-btn">
                <img />
              </div>
              <p class="size-name-text">extra</p>
            </div>
          </div>
        </div>
        {/*<!-- end of UI area-->*/}
        <div class="item-register-btn">등록하기</div>
      </div>
    </>
  )
}

export default MenuEditModalComp;