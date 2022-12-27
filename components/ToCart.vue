<template>
    <div class="to-cart d-flex justify-content-between">
        <div class="to-cart__counter d-flex justify-content-between">
            <button class="counter__btn minus" @click="increment(false)">
                <img src="@/assets/images/to-cart/minus.png" alt="minus_icon">
            </button>
            <div class="counter__wrapper counter d-flex align-items-center">
                <span>{{ localCounter }}</span>
            </div>
            <button class="counter__btn plus" @click="increment(true)">
                <img src="@/assets/images/to-cart/plus.png" alt="minus_icon">
            </button>
        </div>
        <div class="to-cart__nav">
            <button @click="sendData">До кошика</button>
        </div>
    </div>
</template>

<script setup>
const localCounter = ref(1)
const counter = useCookie(
    'productsCounter',
    {
        default: () => (0),
        watch: true
    }
)
const increment = (count) => {
    if (count) localCounter.value++;
    else if (localCounter.value > 1) localCounter.value--;
}
const sendData = () => {
    counter.value = counter.value + localCounter.value;
    location.reload()
}

</script>

<style lang="scss" scoped>
.to-cart {
    margin-top: 40px;
    width: 636px;

    .to-cart__counter {
        width: 141px;
        margin: 15px 0 0px 3px;

        .counter__btn {
            width: 42px;
            height: 44px;
            background: transparent;

            padding: 0;
            border: 0;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .counter__wrapper {
            width: 46px;
            height: 46px;

            background: rgba(255, 255, 255, 0.7);
            border-radius: 7px;

            span {
                font: 28px/35px Onest;
                color: #00284F;

                margin: auto;
            }
        }
    }

    .to-cart__nav {
        background: #69C522;
        height: 56px;
        width: 416px;

        margin-top: 8px;
        border-radius: 40px;

        button {
            font: 18px/27px Onest;
            color: #fff;

            width: 100%;
            height: 100%;

            background: transparent;
            border: 0;
        }

        &:hover {
            background: #00284F;
            transform: translateY(0px);
        }
    }
}

// Tablet
@media screen and (max-width: 768px) {
    .to-cart {
        margin-top: 18px;
        width: 100%;

        .to-cart__nav {
            width: 396px;
        }

        .to-cart__counter {
            width: 152px;
            margin: 13px 0 0px 3px;
        }
    }
}

// Phone

@media screen and (max-width: 414px) {
    .to-cart {
        margin-top: 18px;
        width: 100%;

        .to-cart__nav {
            width: 386px;
            position: relative;
            bottom: 197px;

            button {
                font: 19px/28px Onest;

                &::after {
                    content: ' - 489 ₴';
                }
            }

        }

        .to-cart__counter {
            display: none !important;
        }
    }
}


@media screen and (max-width: 1400px) {
    .to-cart {
        .icon-cart-text {
            left: 1229px;
        }
    }
}
</style>