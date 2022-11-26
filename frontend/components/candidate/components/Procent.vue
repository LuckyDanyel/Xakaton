<script>
    export default {
        props: {
            procent: Number,    
        },
    }
</script>

<template>
    <div class="procent__container">
        <div class="procent__name-value">
            {{ procent }} %
        </div>
        <div class="procent">
            <div class="procent__wrapper"></div>
            <div class="procent__value" :style="{ width: procent + '%', }"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .procent {
        position: relative;
        overflow: hidden;
        outline: 1px solid #C7C7C7;
        border-radius: 12px;
        height: 30px;
        min-width: 240px;
        &__container {
            display: flex;
            align-items: center;
        }
        &__name-value {
            margin-right: 10px;
            font-size: 14px;
            color: #CECECE;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
        }
        &__value {
            position: absolute;
            background-color: #97D729;
            top: 0;
            left: 0;
            height: 100%;
        }
    }
</style>