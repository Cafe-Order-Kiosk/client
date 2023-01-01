import './App.css';
import './assets/css/common.css';
import './assets/css/toolbar.css';
import './assets/css/category.css';
import './assets/css/home.css';
// Header 컴포 추가하면서 추가됨.
import './assets/css/admin-menu-editor.css';
import './assets/css/pay-step-modal.css';
// Menu View 컴포 추가하면서 추가됨.
import './assets/css/menu-view.css'
import './assets/css/choose-items.css'
import './assets/css/choose-items-step1.css'
import './assets/css/choose-items-step2.css'
// pay-dial-model 컴포 추가하면서 추가됨.
import './assets/css/pay-step-modal.css'
// pay-result-comp 컴포 추가하면서 추가됨.
import './assets/css/pay-result.css'

// 컴포넌트 삽입
import HomeComp from "./components/HomeComp"
import HeaderComp from "./components/HeaderComp"
import FooterComp from "./components/FooterComp";
import CategoryComp from "./components/CategoryComp";
import LoginModalComp from "./components/LoginModalComp"
import RegistModalComp from "./components/RegistModalComp"
import MenuEditModalComp from "./components/MenuEditModalComp"
import MenuViewComp from "./components/MenuViewComp"
import ChooseItemComp1 from "./components/ChooseItemComp1"
import ChooseItemComp2 from "./components/ChooseItemComp2"
import PayDialModalComp from "./components/PayDialModalComp"
import PayLoginModalComp from "./components/PayLoginModalComp"
import PayProgressModalComp from "./components/PayProgressModalComp"
import PayResultComp from "./components/PayResultComp"
import PayFooterComp from "./components/PayFooterComp"
import PayStep1Modal from "./components/PayStep1Modal"
import PayStep2Modal from "./components/PayStep2Modal"
import PayStep3Modal from "./components/PayStep3Modal"


const App = () => {
  const chooseItem1ImgUrl = [
    "assets/img/coffee-big.png",
    "assets/img/custom-recipe.png"
  ];
  const payResultImgUrl = [
    "assets/img/coffee.png"
  ]

  return (
    <>
      {/* <Home url={'assets/videos/title-videov2.mp4'} /> */}
      <HeaderComp />
      {/* <CategoryComp /> */}
      {/* <LoginModalComp /> */}
      {/* <RegistModalComp /> */}
      {/* <MenuEditModalComp /> 오류 핸들링 필요...*/} 
      {/* <MenuViewComp /> */}
      {/* <ChooseItemComp1 url={chooseItem1Arr} /> */}
      {/* <ChooseItemComp2 /> */}
      {/* <PayDialModalComp /> */}
      {/* <PayLoginModalComp /> */}
      {/* <PayProgressModalComp /> */}
      <PayResultComp url={payResultImgUrl} />
      <PayFooterComp />
      {/* <PayStep1Modal/> */}
      {/* <PayStep2Modal /> */}
      {/* <PayStep3Modal /> */}
      {/* <FooterComp /> */}
      <div class="background hide" id="background"></div>
    </>
  )
}

export default App;