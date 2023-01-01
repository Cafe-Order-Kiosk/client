// scroll-grab.js 참고해서 horizontal scroll 구현


import { useState } from "react";

const FooterComp = () => {

  const [items, setItems] = useState([
    { name: "콜드브루 라떼", link: "https://scs-phinf.pstatic.net/MjAyMjA4MTBfMjQ0/MDAxNjYwMTM4Nzg2NTgy.e6d5hxw2VT8NY1YeqgjatVf5-tsP0FPDRmWqHT-trnUg.P05OvXG-mC4oc9-RuFX6n2dUSd0wIsVmDXRhTqbmLh4g.JPEG/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4.jpeg?type=w800" },
    { name: "아메리카노", link: "https://img.supercon.io/logo/0000004708.jpg" },
    { name: '에스프레소', link: "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg" },
    { name: '아포카토', link: "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg" },
    { name: '디카페인 카페라뗴', link: "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg" },
    { name: "콜드브루 라떼", link: "https://scs-phinf.pstatic.net/MjAyMjA4MTBfMjQ0/MDAxNjYwMTM4Nzg2NTgy.e6d5hxw2VT8NY1YeqgjatVf5-tsP0FPDRmWqHT-trnUg.P05OvXG-mC4oc9-RuFX6n2dUSd0wIsVmDXRhTqbmLh4g.JPEG/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4.jpeg?type=w800" },
    { name: "아메리카노", link: "https://img.supercon.io/logo/0000004708.jpg" },
    { name: '에스프레소', link: "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg" },
    { name: '아포카토', link: "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg" },
    { name: '디카페인 카페라뗴', link: "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg" },
  ]);


  const itemList = items.map(item =>
    <div className="merchandise">
      <img src={item.link} />
        </div>)


  return (
    <>
      <footer class="footer-menu-container">
    <div class="merchandise-basket">
      {/* <!-- <div class="merchandise">
          <img src="/assets/img/coffee.png" />
        </div> -->  여기는 반복해서 생성해야 함.*/} 
          {itemList}
    </div>
    <div class="pay-info-div">
      <div class="price-info">
        <div class="total-cnt">
          <span>총</span>
          <span>3</span>
          <span>개</span>
        </div>
        <div class="total-price">
          <span>13,500</span>
          <span>원</span>
        </div>
      </div>
      <div class="pay-btn">
        <span>결제하기</span>
      </div>
    </div>
  </footer>

    </>
  )
}

export default FooterComp;