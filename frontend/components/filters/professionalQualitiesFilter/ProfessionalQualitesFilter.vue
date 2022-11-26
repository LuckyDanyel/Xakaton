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
            const deleteItemFilterProfessional = (item) => {
                store.commit('deleteProfessionalQualites', item);
            };
            const takeItemFilterProfessional = (item) => {
                store.commit('addProfessionalQualites', item);
            };

            const popularProfessionalQuality = computed(() => store.state.filtersStore.popularProfessionalQualitesByIndusrty);

            const takenProfessional = computed(() => store.state.filtersStore.takenProfessionalQualites);

            return {
                takenProfessional,
                popularProfessionalQuality,
                deleteItemFilterProfessional,
                takeItemFilterProfessional,
            }
        }
    }
</script>

<template>
    <common-filter
        :itemsFilters="popularProfessionalQuality"
        :takensItemsFilters="takenProfessional"
        :labelName="'Профессиональные качества (Популярные)'"
        @takeItem="takeItemFilterProfessional"
        @deleteItem="deleteItemFilterProfessional"
    >
    </common-filter>
</template>

<style lang="scss">

</style>