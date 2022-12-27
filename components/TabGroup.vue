<template>
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li v-for="(item, i) in tabs" :key="i" class="nav-item" role="presentation">
                <button :class="{ active: item === tabs[0] }" class="nav-link " :id="item" data-bs-toggle="tab"
                    :data-bs-target="`#tab-${i + 1}`" type="button" role="tab" :aria-controls="item"
                    aria-selected="true">
                    {{
        item
}}
                </button>

            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div v-for="(item, i) in tabs" :key="i" :class="{ show: item === tabs[0], active: item === tabs[0] }"
                class="tab-pane fade" :id="`tab-${i + 1}`" role="tabpanel" :aria-labelledby="`${item}-tab`">
                <slot :name="`tab${i + 1}`"></slot>
            </div>
        </div>
        <slot :name="'commonSection'"></slot>
    </div>
</template>

<script setup>
const { tabs } = defineProps(['tabs'])
</script>

<style lang="scss" scoped>
.nav-tabs {
    width: 580px;

    margin: 16px 0px 12px 0px;
    border: 0;

    border-bottom: 1px solid rgba(0, 40, 79, 0.3);

    .nav-item {
        &:not(:last-child) {
            margin-right: 40px;
        }


        .nav-link {
            font: 700 17px/22px Onest;

            color: #00284F;
            background: transparent;
            text-align: start;
            text-transform: uppercase;

            height: 37px;
            padding: 0;
            border: 0;
            border-bottom: 2px solid transparent;

            transition: border-bottom-color 0.3s;
            opacity: 0.4;


            &.active {
                opacity: 1;
                border-bottom-color: #00284F;
            }
        }
    }

    .tab-content {
        margin-top: 14px;
    }
}

// Tablet
@media screen and (max-width: 768px) {

    .nav-tabs {
        width: 100%;
        margin: 13px 0px 11px 0px;
        justify-content: space-between;
    }
}

// Phone
@media screen and (max-width: 414px) {

    .nav-tabs {
        width: 99%;
        margin: 16px 7px 11px 3px;
        justify-content: space-between;

        .nav-item {
            .nav-link {
                font: 700 11px/14px Onest;
                height: 32px;
            }

            &:not(:last-child) {
                margin-right: 0px;
            }
        }
    }
}
</style>