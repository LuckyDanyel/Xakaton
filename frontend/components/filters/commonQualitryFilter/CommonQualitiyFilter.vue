<script>
    import CommonFilter from '../commonFilter/CommonFilter.vue';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    export default {
        components: {
            CommonFilter,
        },
        setup() {
            const store = useStore();
            const deleteItemFilterPerosnal = (item) => {
                store.commit('delelteCommonQualities', item);
            };
            const takeItemFilterPersonal = (item) => {
                store.commit('addCommonQualities', item);
            };

            const commonQuality = computed(() => store.state.filtersStore.commonPersonalQualites);

            const takenCommonQuality = computed(() => store.state.filtersStore.takenCommonPersonalQualites);

            return {
                commonQuality,
                takenCommonQuality,
                deleteItemFilterPerosnal,
                takeItemFilterPersonal,
            }
        }
    }
</script>

<template>
    <common-filter
        :itemsFilters="commonQuality"
        :takensItemsFilters="takenCommonQuality"
        :labelName="'Личные качества (Общие)'"
        @takeItem="takeItemFilterPersonal"
        @deleteItem="deleteItemFilterPerosnal"
    >
    </common-filter>
</template>

<style lang="scss">

</style>