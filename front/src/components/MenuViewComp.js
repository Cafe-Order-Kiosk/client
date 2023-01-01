
import { useState } from "react";

const MenuViewComp = () => {
  // 배열 추가해서 아이템 만들기
  // 추후에 서버와 통신해서 얻어온 데이터로 화면을 구성해야 할 수 있으므로
  // 클래스형 컴포넌트로 바뀔 수 있음.
  return (
    <>
      <main class="product-container">
        <div class="product-flex-container">
          {/*<!-- <div class="product">
            <img src="/assets/img/beberage-big2.png" />
            <hr />
            <p class="product-name">콜드브루 라떼</p>
            <p class="product-price">₩ 4,200</p>
          </div> --> */}
          <div class="product">
            <img src="/assets/img/beberage-big2.png" />
            <hr />
            <p class="product-name">콜드브루 라떼</p>
            <p class="product-price">₩ 4,200</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default MenuViewComp;