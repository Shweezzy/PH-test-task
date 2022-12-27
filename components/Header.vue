<template>
  <header class="header">
    <div class="container">
      <div class="header__content d-flex justify-content-between align-items-center">
        <div class="content__item d-flex justify-content-between">
          <picture>
            <img class="header__icon icon-burger" src="@/assets/images/header/icon-burger.png" alt="burger_menu" />
          </picture>
          <picture>
            <img class="header__icon icon-search" src="@/assets/images/header/icon-search.png" alt="search_icon" />
          </picture>
        </div>
        <div class="content__item d-flex justify-content-end">
          <NuxtLink to="/">
            <picture>
              <img class="header__icon icon-logo" src="@/assets/images/header/logo.png" alt="search_icon" />
            </picture>
          </NuxtLink>
        </div>
        <div class="content__item d-flex justify-content-around">
          <picture>
            <img class="header__icon icon-phone" src="@/assets/images/header/icon-phone.png" alt="phone_icon" />
          </picture>
          <picture>
            <img class="header__icon icon-cart" src="@/assets/images/header/icon-cart.png" alt="search_icon" />
          </picture>
          <span class="icon-cart-text" @click="clearProducts">{{ counter }}</span>

        </div>
      </div>
      <div class="header__menu d-flex align-items-center justify-content-center">
        <ul class="d-flex">
          <li>
            <NuxtLink to="/development">Омега-3</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/development">Вітаміни</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/development">Добавки</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/development">Доставка</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/development">Про нас</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const counter = useCookie(
  'productsCounter',
  {
    watch: true
  }
)
const clearProducts = () => {
  const confirmed = confirm('Want to remove all items in the cart?')
  if (confirmed) {
    counter.value = 0
  } else return
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: auto;
  top: 44px;
  left: 0;
  background-color: #fff;
  z-index: 1;

  .icon-cart-text {
    position: absolute;
    font-family: "Onest";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    width: 24px;
    height: 22px;
    background: #F5F352;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -10px 0px 0 91px;
  }

  .container {
    margin: 0 auto;
    padding: 0 10px;

    .header__content {
      height: 100px;

      .content__item {
        width: 92px;

        &:nth-child(2) {
          width: 230px;
        }

        &:nth-child(3) {
          width: 127px;
        }

        .header__icon {
          cursor: pointer;
          transition: transform 0.1s;

          &:hover {
            transform: scale(1.08);
          }
        }
      }

      .icon-burger {
        width: 28px;
        height: 24px;
      }

      .icon-search {
        width: 24px;
        height: 24px;
      }

      .icon-logo {
        width: 196px;
        height: 32px;
      }

      .icon-phone {
        height: 24px;
        width: 24px;
      }

      .icon-cart {
        height: 25px;
        width: 27px;
      }
    }

    .header__menu {
      height: 52px;

      ul {
        font: 400 23px/29.32px Onest;

        margin: 0px;
        padding-left: 0;
        list-style: none;

        a {
          text-decoration: none;
          color: unset;
        }

        li {
          margin: 0px 12px;
          cursor: pointer;
          min-width: 110px;
          transition: font-weight 0.1s;

          &:nth-child(4) {
            min-width: 110px;
            margin-right: 2.6px;
          }

          &:nth-child(5) {
            text-align: end;
          }

          &:hover {
            font-weight: 700;
          }
        }
      }
    }
  }
}

// Tablet
@media screen and (max-width: 768px) {

  .header {
    top: 30px;

    .container {
      padding: 0 11px;

      .header__content {
        height: 91px;

        .content__item {
          width: 86px;

          &:nth-child(2) {
            width: 193px;
            height: 32px;

            img {
              width: 152px;
              height: 24px;
            }
          }

          &:nth-child(3) {
            width: 127px;
          }
        }
      }

      .header__menu {

        ul {

          li {
            margin: 0 12px;
            margin-top: -4px;
            min-width: 124px;
          }
        }

      }
    }
  }

}

// Phone
@media screen and (max-width: 414px) {
  .header {
    top: 29px;

    .container {
      padding: 0px 10px 0 17px;

      .header__content {
        height: 91px;

        .icon-burger {
          width: 18px;
          height: 14px;
        }

        .icon-search {
          width: 15px;
          height: 15px;
        }

        .icon-phone {
          width: 18px;
          height: 17px;
        }

        .icon-cart {
          width: 18px;
          height: 17px;
        }

        .icon-cart-text {
          margin: -4px 0px 0 45px;
          width: 12px;
          height: 12px;
          font-size: 8px;
        }

        .content__item {
          width: 50px;

          &:nth-child(2) {
            width: 126px;
            height: 32px;
            padding-top: 3px;

            img {
              width: 119px;
              height: 20px;
            }
          }

          &:nth-child(3) {
            width: 64px;
          }
        }
      }

      .header__menu {

        display: none !important;

      }
    }
  }

}
</style>
