
import { useState } from "react";

const CategoryComp = () => {

  return (
    <>
      <div class="main-container">
        <div class="category-container">
          <div class="category-grid-container">
            <div class="category-item-container grid1">
              <div class="category-item">
                <img class="coffee-icon" src="assets/img/coffee-big.png" />
                <p>COFFEE</p>
              </div>
            </div>
            <div class="category-item-container grid2">
              <div class="category-item">
                <img class="beverage-icon" src="assets/img/beberage-big2.png" />
                <p>BEVERAGE</p>
              </div>
            </div>
            <div class="category-item-container grid3">
              <div class="category-item">
                <img class="tea-icon" src="assets/img/tea-big.png" />
                <p>TEA</p>
              </div>
            </div>
            <div class="category-item-container grid4">
              <div class="category-item">
                <img class="dessert-icon" src="assets/img/dessert-big.png" />
                <p>DESSERT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryComp;