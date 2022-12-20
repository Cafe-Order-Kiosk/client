/* 상품 이미지 랜덤 생성 */
let imgs = [
  "https://scs-phinf.pstatic.net/MjAyMjA4MTBfMjQ0/MDAxNjYwMTM4Nzg2NTgy.e6d5hxw2VT8NY1YeqgjatVf5-tsP0FPDRmWqHT-trnUg.P05OvXG-mC4oc9-RuFX6n2dUSd0wIsVmDXRhTqbmLh4g.JPEG/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4.jpeg?type=w800",
  "https://img.supercon.io/logo/0000004708.jpg",
  "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg",
  "https://static.megamart.com/product/image/1326/13265731/13265731_1_960.jpg",
  "https://img.danawa.com/prod_img/500000/942/288/img/4288942_1.jpg?shrink=330:330&_v=20220524150349",
  "https://contents.lotteon.com/itemimage/_v145946/LO/17/31/45/52/04/_1/73/14/55/20/5/LO1731455204_1731455205_1.jpg/dims/resizef/720X720",
  "https://img.danawa.com/prod_img/500000/889/734/img/9734889_1.jpg?shrink=330:330&_v=20191022174417",
  "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128692]_20210426091933665.jpg",
  "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[94]_20210430103337006.jpg",
  "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110611]_20210415132507539.jpg",
];

let menus = [
  "콜드브루 라떼",
  "아메리카노",
  "에스프레소",
  "아인슈페너",
  "아포카토",
  "디카페인 콜드브루",
  "디카페인 콜드브루 라떼",
  "콜드브루 화이트 비엔나",
  "콜드브루 크림넛",
  "콜드브루 니트로",
];

const basket = document.querySelector(".merchandise-basket");
for (let i = 0; i < 20; i++) {
  let idx = Math.floor(Math.random() * imgs.length);
  let item = document.createElement("div");
  item.setAttribute("class", "merchandise");
  let img = document.createElement("img");
  img.src = imgs[idx];
  item.appendChild(img);
  basket.appendChild(item);
}

/* product 랜덤 생성 */
const flexContainer = document.querySelector(".product-flex-container");
for (let i = 0; i < 20; i++) {
  let price = Math.floor(Math.random() * 20) * 100;
  price += 3000;

  let idx = Math.floor(Math.random() * imgs.length);

  let idx2 = Math.floor(Math.random() * menus.length);

  let item = document.createElement("div");
  item.setAttribute("class", "product");
  let img = document.createElement("img");
  img.src = imgs[idx];
  item.appendChild(img);
  let hr = document.createElement("hr");
  item.appendChild(hr);
  let p1 = document.createElement("p");
  p1.setAttribute("class", "product-name");
  let text1 = document.createTextNode(menus[idx2]);
  p1.appendChild(text1);

  let p2 = document.createElement("p");
  p2.setAttribute("class", "product-price");
  let text2 = document.createTextNode("₩ " + price + " 원");
  p2.appendChild(text2);

  item.appendChild(p1);
  item.appendChild(p2);

  flexContainer.appendChild(item);
}
