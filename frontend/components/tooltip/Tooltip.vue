<script>
    import { ref } from 'vue';
    export default {
        setup() {
            const open = ref(false);
            return {
                open,
            }
        }
    }

</script>

<template>
    <div class="tooltip">
        <div class="tooltip__content" v-if="open">
            <slot name="content"></slot>
        </div>
        <div class="tooltip__rectangle" v-if="open"></div>
        <div class="tooltip__icon"
            @mouseenter="() => open = true"
            @mouseleave="() => open = false"
        >
            <slot name="icon"></slot>
        </div>
    </div>
</template>

<style lang="scss">
    .tooltip {
        position: relative;
        &__content {
            position: absolute;
            font-size: 12px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            padding: 6px;
            border-radius: 6px;
            white-space: nowrap;
            background-color: white;
            box-shadow: 0px 0px 5px rgb(0 0 0 / 25%);
            color: #717070;
            top: -36px;
            right: 50%;
            transform: translateX(50%);
        }
        &__icon {
            cursor: pointer;
        }
        &__rectangle {
            width: 21px;
            height: 14px;
            background-image: url('./images/triangle.svg');
            background-position: center;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 13px;
            left: calc(50% - 10px);
        }
    }
</style>