<template>
  <div class="shipping d-flex align-items-center">
    <div class="container">
      <img class="shipping__icon" src="@/assets/images/free-shipping/drugs.png" alt="drugs_icon" />
      <span class="shipping__text">Безкоштовна доставка від 1800 грн</span>
      <img class="shipping__icon" src="@/assets/images/free-shipping/drugs.png" alt="drugs_icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shipping {
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 44px;

  background-color: #99afff;

  text-align: center;

  .shipping__icon {
    height: 22px;
    width: 22px;

    vertical-align: text-bottom;
  }

  .shipping__text {
    color: #ffffff;
    font: 500 20px/24px Onest;

    margin: 0 17px;
  }
}

// Tablet
@media screen and (max-width: 768px) {
  .shipping {
    height: 28px;

    .shipping__text {
      font-size: 14px;
      margin: 0 12px;
    }

    .shipping__icon {
      height: 15px;
      width: 15px;
      vertical-align: middle;
    }
  }
}

// Phone
@media screen and (max-width: 414px) {
  .shipping {
    height: 30px;

    .shipping__text {
      font-size: 14px;
    }

    .shipping__icon {
      height: 15px;
      width: 15px;
      vertical-align: middle;
    }
  }
}
</style>
