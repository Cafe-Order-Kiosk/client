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
import './assets/css/choose-items_step1.css'
import './assets/css/choose-items_step2.css'


// 컴포넌트 삽입
import HomeComp from "./components/HomeComp"
import HeaderComp from "./components/HeaderComp"
import FooterComp from "./components/FooterComp";
import CategoryComp from "./components/CategoryComp";
import LoginModalComp from "./components/LoginModalComp"
import RegistModalComp from "./components/RegistModalComp"
import MenuEditModalComp from "./components/MenuEditModalComp"
import MenuViewComp from "./components/MenuViewComp"

const App = () => {
  return (
    <>
      {/* <Home url={'assets/videos/title-videov2.mp4'} /> */}
      <HeaderComp />
      {/* <CategoryComp /> */}
      {/* <LoginModalComp /> */}
      {/* <RegistModalComp /> */}
      {/* <MenuEditModalComp /> 오류 핸들링 필요...*/} 
      <MenuViewComp />
      <FooterComp />
      <div class="background hide" id="background"></div>
    </>
  )
}

export default App;