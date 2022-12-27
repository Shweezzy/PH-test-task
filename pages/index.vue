<template>
  <div>
    <card>
      <tab-group class="tabs" :tabs="['опис', 'користь', 'інгредієнти', 'спосіб застосування']">
        <template #tab1>
          <p class="title">Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я
            твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.
          </p>
        </template>
        <template #tab2>
          <ul class="benefit">
            <li>Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
            <li>Зменшують випадіння волосся, стимулюють його ріст</li>
            <li>Підіймають настрій та полегшують симптоми депресії</li>
            <li>Зміцнюють імунітет: зменшують запальні процеси</li>
            <li>Поліпшують роботу гормонів, серця і ЦНС</li>
            <li>Зменшують болі в суглобах</li>
            <li>Покращують метаболізм і роботу ШКТ</li>
          </ul>
        </template>
        <template #tab3>
          <table class="table">
            <tbody>
              <tr>
                <td><strong>Склад:</strong></td>
                <td>100% риб'ячий жир з печінки тріски,<br> желатин, гліцерин.</td>
              </tr>
              <tr>
                <td><strong>EPA / DHA</strong></td>
                <td>170 мг / 205 мг</td>
              </tr>
              <tr>
                <td><strong>Вітамін-А</strong></td>
                <td>656 мкг 2187 МО</td>
              </tr>
              <tr>
                <td><strong>Вітамін-D3</strong></td>
                <td>5.2 мкг 210 МО</td>
              </tr>
            </tbody>
          </table>
        </template>
        <template #tab4>
          <p>Для профілактики, дорослим і дітям від 11 років –
            <em><strong>4 капсули на день</strong></em>
            , разом із<br> їжею або одразу після. Бажано з іншими жирами
            <em>для кращого засвоєння</em>
          </p>
          <p>
            <strong>Курс прийому: </strong>
            2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із
            Тунця.
          </p>
        </template>
      </tab-group>

      <div class="description d-flex justify-content-between">
        <div class="description__drugs d-flex flex-wrap w-50">
          <picture>
            <img class="drugs__icon" src="@/assets/images/drugs.png" alt="drugs-icon" />
          </picture>
          <div class="drugs__text">
            <p><strong>В упаковці:</strong><br>
              120 капсул по 500 мг<br>
              <span>1 місяць прийому</span>
            </p>
          </div>

        </div>
        <div class="description__price d-flex align-items-end justify-content-end w-50">
          <strong class="price">963 ₴</strong>
          <strong class="price-discount">489 ₴</strong>
        </div>
      </div>

      <ToCart />
    </card>

    <div class="phone-feature"></div>
    <div class="container">
      <section class="delivery">
        <div class="delivery__free">
          <picture>
            <img class="delivery__icon" src="@/assets/images/delivery_icon1.png" alt="free_delivery" />
          </picture>
          <span>Безкоштовна доставка<br> від 1800 грн</span>
        </div>
        <div class="delivery__16">
          <picture>
            <img class="delivery__icon" src="@/assets/images/delivery_icon2.png" alt="until_16" />
          </picture>
          <span>Відправки в день оформлення<br> замовлення до 16:00</span>

        </div>
        <div class="delivery__cash-return">
          <picture>
            <img class="delivery__icon" src="@/assets/images/delivery_icon3.png" alt="cash_return" />
          </picture>
          <span>Гарантія повернення<br> грошових коштів</span>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.phone-feature {
  display: none;
}

.tabs {
  #tab-1 {
    .title {
      font: 400 18px/28px Onest;
      color: #00284F;
      width: 660px;
      margin-left: 2px;
    }
  }

  #tab-2 {
    .benefit {
      padding: 0;
      margin: 31px 0px 0px 21px;

      li {
        font: 400 18px/25px Gilroy;
        letter-spacing: -0.2px;
        color: #00284f;

        &::marker {
          color: #00284F;
        }
      }
    }
  }

  #tab-3 {
    .table {
      width: 700px;

      margin-top: 30px;

      tr {
        border-bottom: 1px solid #1D1D1B;

        & td:first-child {
          width: 350px;
        }

        td {
          font: 18px/24px Gilroy;
          letter-spacing: 0.3px;
          color: #00284f;

          padding-left: 0px;
        }
      }
    }
  }

  #tab-4 {
    p {
      font: 400 19px/25px Gilroy;
      letter-spacing: -0.2px;
      color: #00284f;

      &:first-child {
        margin-top: 31px;

      }

      &:nth-child(2) {
        margin-top: 20px;

      }
    }
  }
}

.description {
  width: 91%;

  .description__drugs {
    margin-top: 30px;

    .drugs__icon {
      width: 42px;
      height: 45px;
      margin-top: 22px;
    }

    .drugs__text {
      font: 400 18px/23px Onest;
      color: #00284F;
      font-weight: 400;

      margin-left: 33px;
      padding-top: 10px;

      span {
        color: rgba(0, 40, 79, 0.5);
      }
    }
  }

  .description__price {
    color: #00284F;

    padding: 0 3px 20px 0px;

    .price {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.03em;
      font-weight: 900;
      color: rgba(0, 40, 79, 0.3);

      margin: 0 30px 7px 0;

      &::after {
        position: relative;
        display: block;
        content: "";
        width: 74px;
        height: 2px;
        left: 0px;
        bottom: 19px;
        background-color: rgb(0, 40, 79);
        transform: rotate(15deg);
      }
    }

    .price-discount {
      font-size: 40px;
      line-height: 51px;
    }

  }
}

.delivery {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 56px;
  gap: 10px;

  width: 100%;
  height: 88px;

  background: linear-gradient(270deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.54) 100%);
  border-radius: 15px;
  margin-top: 35px;
  margin-bottom: 35px;

  .delivery__16 {
    width: 345px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 300px;
    height: 48px;

    img {
      width: 56px;
      height: 36px;
    }

    span {
      font-family: Onest;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      color: #00284F;

    }
  }
}

// tablet
@media screen and (max-width: 768px) {
  .tabs {
    #tab-1 {
      .title {
        width: 680px;
        margin-bottom: 0;
      }
    }
  }

  .description {
    width: 100%;

    .description__price {
      padding: 0 0px 24px 0px;
    }
  }

  .delivery {
    width: 100%;
    height: 206px;

    div {
      flex-direction: column;
      height: 128px;
      text-align: center;
      width: 245px;
    }

    span {
      width: 100%;
    }
  }
}

// Phone
@media screen and (max-width: 414px) {
  .phone-feature {
    display: block;
  }

  .tabs {
    .phone-feature {
      display: block;
    }

    #tab-1 {
      .title {
        width: 374px;
        font: 400 16px/21px Onest;
        margin: 0px 0 0 4px;
        overflow: hidden;
        height: 44px;
      }
    }

    #tab-2 {
      .benefit {
        margin-top: 10px;

        li {
          font: 400 13px/19px Gilroy;
        }
      }
    }

    #tab-3 {
      .table {
        width: 100%;

        tr {
          & td:first-child {
            width: 55%;
          }

          td {
            font: 13px/15px Gilroy;
          }
        }
      }
    }
  }

  .description {
    width: 100%;

    flex-direction: column;

    .description__drugs {
      width: 97% !important;
      justify-content: center;
      margin-top: 128px;

      .drugs__text {
        font: 500 16px/23px Onest;
        color: #00284F;
        font-weight: 400;
        margin-left: 24px;
        margin-right: 9px;
        padding-top: 10px;


      }

      .drugs__icon {
        width: 41px;
        height: 41px;
      }
    }

    .description__price {
      display: none !important;
    }
  }

  .delivery {
    width: 100%;
    height: 276px;
    flex-direction: column;
    padding: 7px 0 0 0px;

    div {
      flex-direction: row;
      width: 82%;
      height: 128px;

      span {
        font-size: 16px;
        line-height: 22px;
        text-align: left;
        margin-left: 21px;

      }
    }

    .delivery__16 {
      width: auto;
    }

  }
}
</style>
