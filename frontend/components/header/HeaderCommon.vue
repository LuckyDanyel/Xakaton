<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    export default {
        setup() {
            const store = useStore();

            const counter = computed(() => store.state.candidatesStore.takenCandidates);

            return {
                counter,
            }
        }
    }
</script>

<template>
    <div class="header-common">
        <div class="header-common__counter-candidates">
            <div class="header-common__icon-counter"></div>
            <div class="header-common__counter" v-if="counter"> {{ counter }} </div>
        </div>
    </div>
</template>

<style lang="scss">
    .header-common {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &__counter-candidates {
            position: relative;
        }
        &__counter {
            font-size: 12px;
            width: 18px;
            height: 18px;
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            background-color: #FF2443;
            border-radius: 100%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -9px;
            left: 15px;
        }
        &__icon-counter {
            background-image: url('./images/counter.svg');
            background-position: center;
            background-repeat: no-repeat;
            width: 26px;
            height: 26px;
        }
    }
</style>