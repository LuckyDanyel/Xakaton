<script>
    import { ref, toRefs, computed, unref } from 'vue';
    export default {
        props: {
            takensItemsFilters: {
                type: Array,
                default: () => [],
            },
            itemsFilters: {
                type: Array,
                default: () => [],
            },
            labelName: String,
        },
        setup(props, context) {
            const { takensItemsFilters, itemsFilters } = toRefs(props);
            const takensItemsIds = computed(() => unref(takensItemsFilters).map((item) => item.id));
            const itemsFiltersWithoutTakenItems = computed(() => unref(itemsFilters).filter((item) => unref(takensItemsIds).indexOf(item.id) === -1))

            const open = ref(false);

            const takenItemFilter = (item) => {
                context.emit('takeItem', item);
            }
            const deleteItemFilter = (item) => {
                context.emit('deleteItem', item);
            }

            return {
                open,
                takensItemsFilters,
                itemsFiltersWithoutTakenItems,
                takenItemFilter,
                deleteItemFilter,
            }
        }
    }
</script>

<template>
    <div class="common-filter">
        <div class="common-filter__label"
            @click="() => open = !open"
        >
            <div class="common-filter__label-name"> {{ labelName }} </div>
            <div class="common-filter__label-item"></div>
        </div>
        <div class="common-filter__wrapper" v-if="open">
            <div class="common-filter__wrapper-taken">
                <div class="common-filter__wrapper-taken-item"
                    v-for="itemTaken in takensItemsFilters"
                    @click="deleteItemFilter(itemTaken)"
                > {{ itemTaken.name }} </div>
            </div>
            <div class="common-filter__wrapper-default">
                <div class="common-filter__wrapper-default-item"
                    v-for="itemWithoutTaken in itemsFiltersWithoutTakenItems"
                    @click="takenItemFilter(itemWithoutTaken)"
                > {{ itemWithoutTaken.name }} </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .common-filter {
        padding: 16px;
        border-radius: 6px;
        background-color:#F8F9FD;
        &__label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        &__label-name {
            font-size: 16px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
        }
        &__label-item {
            width: 16px;
            height: 16px;
            background-image: url('../images/drop-down-item.svg');
            background-position: center;
            background-repeat: no-repeat;
        }
        &__wrapper {
            padding: 6px;
        }
        &__wrapper-taken {
            padding: 12px 0;
            border-bottom: 1px solid black;
            margin-bottom: 12px;
        }
        &__wrapper-taken-item {
            display: inline-block;
            padding: 6px 8px;
            border-radius: 6px;
            background-color: #DEE2F4;
            cursor: pointer;
            margin: 6px 0;
            margin-right: 12px;
            font-size: 12px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
        }
        &__wrapper-default {
            height: 200px;
            overflow: auto;
            padding-left: 5px;
            padding-bottom: 12px;

            &::-webkit-scrollbar {
                width: 8px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                background-color: #d8d8d8;
                border-radius: 10px;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background-color: #a2a2a3;
                border-radius: 10px;
            }
        }
        &__wrapper-default-item {
            cursor: pointer;
            display: inline-block;
            padding: 6px 8px;
            border-radius: 6px;
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            margin: 6px 0;
            margin-right: 12px;
            font-size: 12px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
        }
    }
</style>