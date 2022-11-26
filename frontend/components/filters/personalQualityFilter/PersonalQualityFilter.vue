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
                store.commit('deleltePersonalQualites', item);
            };
            const takeItemFilterPersonal = (item) => {
                store.commit('addTakenPersonalQualites', item);
            };

            const popularPersonallQualites = computed(() => store.state.filtersStore.popularPersonallQualitesByIndustry);

            const takenPersonalQualites = computed(() => store.state.filtersStore.takenPersonalQualites);

            return {
                popularPersonallQualites,
                takenPersonalQualites,
                deleteItemFilterPerosnal,
                takeItemFilterPersonal,
            }
        }
    }
</script>

<template>
    <common-filter
        :itemsFilters="popularPersonallQualites"
        :takensItemsFilters="takenPersonalQualites"
        :labelName="'Личные качества (Популярные)'"
        @takeItem="takeItemFilterPersonal"
        @deleteItem="deleteItemFilterPerosnal"
    >
    </common-filter>
</template>

<style lang="scss">

</style>