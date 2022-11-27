<script>import { ref, computed } from 'vue';
    export default {
        setup(props, { emit }) {
            const open = ref(false);
            const clickHandler = () => {
                if(open.value) {
                    emit('deleteCandidate');
                } else {
                    emit('clickCandidate');
                }
                open.value = !open.value;
            }

            const text = computed(() => open.value ? 'Убрать из сравнения' : 'Добавить в сравнение')

            return {
                clickHandler,
                open,
                text,
            }
        }
    }
</script>

<template>
    <div class="button-compare" :class="open ? 'button-compare_color' : '' " @click="clickHandler">
        <div class="button-compare__wrapper">
            {{ text }}
        </div>
    </div>
</template>
<style lang="scss">
    .button-compare {
        padding: 8px;
        background-color: #24B6D7;
        border-radius: 6px;
        max-width: 220px;
        width: 100%;
        cursor: pointer;

        &_color {
            background-color: #FF2443;
        }
        &__wrapper {
            text-align: center;
            font-size: 14px;
            color: white;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
        }
    }
</style>