<script>
    import PersonalQualityFilter from './personalQualityFilter/PersonalQualityFilter.vue';
    import CommonQualitiyFilter from './commonQualitryFilter/CommonQualitiyFilter.vue';
    import ProfessionalQualitesFilter from './professionalQualitiesFilter/ProfessionalQualitesFilter.vue';
    import SkillsFilter from './skillsFilter/SkillsFilter.vue';
    export default {
        components: {
            PersonalQualityFilter,
            CommonQualitiyFilter,
            ProfessionalQualitesFilter,
            SkillsFilter,
        },
        
    }
</script>

<template>
    <div class="filters__wrapper">
        <personal-quality-filter class="filters__wrapper-filter-item"></personal-quality-filter>
        <common-qualitiy-filter class="filters__wrapper-filter-item"></common-qualitiy-filter>
        <professional-qualites-filter class="filters__wrapper-filter-item"></professional-qualites-filter>
        <skills-filter class="filters__wrapper-filter-item"></skills-filter>
    </div>
</template>

<style lang="scss">
    .filters__wrapper {
        width: 320px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        padding: 16px;

        &-filter-item {
            margin-bottom: 12px;
        }
    }
</style>