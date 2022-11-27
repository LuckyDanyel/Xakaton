<script>
    import { ref, computed, toRefs, unref } from 'vue';
    export default {
        props: {
            qualitesItems: {
                type: Array,
                default: () => [],
            },
            takenQualites: {
                type: Array,
                default: () => []
            }
        },
        setup(props) {
            const { takenQualites, qualitesItems } = toRefs(props);
            const open = ref(false);
               
            const takenQualitesIds = computed(() => unref(takenQualites).map((qualite) => qualite.id));

            const qualitesWithoutTaken = computed(() => unref(qualitesItems).filter((qualite) => unref(takenQualitesIds).indexOf(qualite.id) === -1));

            const currentTakensQualites = computed(() => unref(qualitesItems).filter((qualite) => unref(takenQualitesIds).indexOf(qualite.id) !== -1));

            return {
                open,
                currentTakensQualites,
                qualitesWithoutTaken,
            }
        }
    }
</script>

<template>
    <div class="qualites"
    >
        <div class="qualites__label"
            @click="() => open = !open"
        >
            <slot name="label"></slot>
        </div>
        <div class="qualites__wrapper" :class="open ? 'qualites__wrapper_open' : ''" @click="() => open = !open">
            <div class="qualites__item"
                v-for="qualiti in currentTakensQualites"
            >
                <div class="qualites__item-icon"></div>
                <p class="qualites__item-name">
                    {{ qualiti.name }}
                </p>
            </div>
            <div class="qualites__item"
                v-for="qualiti in qualitesWithoutTaken"
            >
                <div class="qualites__item-icon_gray"></div>
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
        margin-bottom: 6px;
        &__wrapper {
            display: flex;
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }
        &__wrapper_open {
            overflow: visible;
            flex-wrap: wrap;
        }
        &__item {
            display: flex;
            align-items: center;
            white-space: nowrap;
        }
        &__item-name {
            margin: 0;
            padding: 0;
        }
        &__label {
            white-space: nowrap;
            display: flex;
            align-items: center;
            cursor: pointer;
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
        &__item-icon_gray {
            background-image: url('./images/icon-best-bad.svg');
            background-repeat: no-repeat;
            background-position: center;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            margin-left: 8px;
        }
        &__wrapper-hiden {
            position: absolute;
            background-color: white;
            border-radius: 6px;
            padding: 12px;
            box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.25);
        }
        
    }
</style>