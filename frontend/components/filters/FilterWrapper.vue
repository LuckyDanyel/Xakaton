<script>
    import PersonalQualityFilter from './personalQualityFilter/PersonalQualityFilter.vue';
    import CommonQualitiyFilter from './commonQualitryFilter/CommonQualitiyFilter.vue';
    export default {
        components: {
            PersonalQualityFilter,
            CommonQualitiyFilter,
        },
        
    }
</script>

<template>
    <div class="filters__wrapper">
        <personal-quality-filter class="filters__wrapper-filter-item"></personal-quality-filter>
        <common-qualitiy-filter class="filters__wrapper-filter-item"></common-qualitiy-filter>
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