<script>
    export default {
        props: {
            qualitesItems: {
                type: Array,
                default: () => [],
            }
        }
    }
</script>

<template>
    <div class="qualites">
        <div class="qualites__label">
            <slot name="label"></slot>
        </div>
        <div class="qualites__wrapper">
            <div class="qualites__item"
                v-for="qualiti in qualitesItems"
            >
                <div class="qualites__item-icon"></div>
                <p class="qualites__item-name">
                    {{ qualiti.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .qualites {
        display: flex;
        &__wrapper {
            display: flex;
        }
        &__item {
            display: flex;
            align-items: center;
        }
        &__item-name {
            margin: 0;
            padding: 0;
        }
        &__label {
            white-space: nowrap;
        }
        &__label, &__item {
            font-weight: 400;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            color: #717070;
        }
        &__item-icon {
            background-image: url('./images/icon-best-small.svg');
            background-repeat: no-repeat;
            background-position: center;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            margin-left: 8px;
        }
        
    }
</style>