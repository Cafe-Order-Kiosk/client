
import { useState } from "react";

const HeaderComp = () => {

  return (
    <>
    {/* --- header --- */}
    <header class="menu-tool-bar">
      <div class="left-menu-container">
        <img src="/assets/img/home-white.png" class="tool-bar-img def-div home-btn tool-bar-btn" />
        <img src="/assets/img/category.png" class="tool-bar-img def-div cat-btn tool-bar-btn" />
      </div>
      <div class="seperator-container">
        <img src="/assets/img/tool_bar_seperator.png" class="tool-bar-img def-div tool-bar-seperator" />
      </div>
      <div class="brand-name"><span>SAMPLE CAFE</span></div>
      <div class="admin-menu-container">
        <div class="edit-menu-btn hidden">
          <img />
        </div>
      </div>
    </header>
    </>
  )
}

export default HeaderComp;