<template>
    <section class="card">
        <div class="container d-flex justify-content-center">
            <div class="card__info">
                <div class="card__info-title d-flex">
                    <h1>Омега-3 <span>Тріска</span></h1>
                    <div><span>з вітамінами A i D3</span></div>
                </div>
                <slot />
            </div>
            <div class="card__slider">
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="true"
                    data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/images/carousel/state1.png" class="d-block w-100" alt="icon1">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/images/carousel/state2.png" class="d-block w-100" alt="icon2">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/images/carousel/state3.png" class="d-block w-100" alt="icon3">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/images/carousel/state4.png" class="d-block w-100" alt="icon4">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/images/carousel/state5.png" class="d-block w-100" alt="icon5">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <picture>
                            <source media="(max-width:768px)" srcset="@/assets/images/carousel/arrow-left2.png">
                            <img src="@/assets/images/carousel/arrow-left.png" aria-hidden="true">

                        </picture>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <picture>
                            <source media="(max-width:768px)" srcset="@/assets/images/carousel/arrow-right2.png">
                            <img src="@/assets/images/carousel/arrow-right.png" aria-hidden="true">
                        </picture>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.card {
    background-color: transparent;
    border: none;
    padding: 5.4em 0 4.7em 0;

    .card__info {
        width: 54%;

        .card__info-title {
            h1 {
                color: #00284f;
                font-size: 40px;
                line-height: 51px;
                font-weight: 700;

                span {
                    font: 40px/57px Piazzolla;
                    font-style: italic;
                    font-weight: 500;
                }
            }

            div {
                width: 307px;
                height: 37px;

                font-size: 22px;
                line-height: 22px;
                font-weight: 500;
                color: #00284F;
                text-align: center;

                background-color: #fff;

                border-radius: 20px;
                margin: 14px 12px 0 37px;
                padding-top: 8px;
            }
        }
    }

    .card__slider {
        margin-top: 3px;

        width: 46%;

        .carousel {

            margin: 0 0 0 -48px;
        }

        .carousel-inner {
            height: 440px;
        }


        .carousel-control-prev {
            position: absolute;
            left: 81%;
            top: 105%;
            height: 28px;
            display: block;
            z-index: 0;


            img {
                width: 24px;
                height: 18px;
            }
        }

        .carousel-control-next {
            position: absolute;
            left: 91%;
            top: 105%;
            height: 28px;
            display: block;
            z-index: 0;


            img {
                width: 24px;
                height: 18px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .card {
        padding: 1.3em 0;

        .container {
            flex-direction: column-reverse !important;
        }

        .card__info {
            width: 100%;

            .card__info-title {

                h1 {
                    width: 300px;
                }

                div {
                    margin: 12px 0px 0px 15px;
                    height: 32px;
                    width: 260px;
                    font-size: 21px;
                    line-height: 17px;
                }
            }
        }

        .card__slider {
            width: 100%;
            height: 275px;

            .carousel-control-prev {
                left: -5%;

                top: 45%;

                img {
                    width: 12px;
                }
            }

            .carousel-control-next {
                top: 45%;

                img {
                    width: 12px;
                }

            }

            .carousel-inner {
                width: 48.7%;
                height: auto;
                margin: auto;
            }
        }

    }
}

@media screen and (max-width: 414px) {
    .card {
        height: 595px;

        .container {
            flex-direction: column-reverse !important;
        }

        .card__info {
            width: 100%;

            .card__info-title {
                padding-left: 3px;
                flex-wrap: wrap;
                margin: 0;

                h1 {
                    width: 100%;
                    font-size: 26px;
                    line-height: 38px;
                    margin: 0;

                    span {
                        font: 26px/34px Piazzolla;
                        font-style: italic;
                    }
                }



                div {
                    margin: 0 0px 0px 0px;
                    height: 24px;
                    width: 186px;
                    font-size: 16px;
                    line-height: 9px;
                }
            }
        }

        .card__slider {
            width: 100%;
            height: 197px;

            .carousel-control-prev {
                left: -5%;

                top: 57px;

                img {
                    width: 12px;
                }
            }

            .carousel-control-next {

                top: 57px;

                img {
                    width: 12px;
                }

            }

            .carousel-inner {
                width: 61.7%;
                margin: auto;
            }
        }

    }
}

@media screen and (max-width: 1400px) {
    .card {
        .card__slider {
            .carousel {
                margin: 0;
            }
        }
    }
}
</style>
