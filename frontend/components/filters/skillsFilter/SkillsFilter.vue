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
                store.commit('deleteSkill', item);
            };
            const takeItemFilterProfessional = (item) => {
                store.commit('addSkill', item);
            };

            const popularSkills = computed(() => store.state.filtersStore.popularSkillsByIndusrty);

            const takenSkils = computed(() => store.state.filtersStore.takenSkills);

            return {
                takenSkils,
                popularSkills,
                deleteItemFilterProfessional,
                takeItemFilterProfessional,
            }
        }
    }
</script>

<template>
    <common-filter
        :itemsFilters="popularSkills"
        :takensItemsFilters="takenSkils"
        :labelName="'Навыки (Популярные)'"
        @takeItem="takeItemFilterProfessional"
        @deleteItem="deleteItemFilterProfessional"
    >
    </common-filter>
</template>

<style lang="scss">

</style>