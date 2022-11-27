<script>
    import WrapperCandidates from '@/components/candidate/WrapperCandidates.vue';
    import FilterWrapper from '../components/filters/FilterWrapper.vue';
    import HeaderCommon from '@/components/header/HeaderCommon.vue';
    export default {
        components: {
            WrapperCandidates,
            FilterWrapper,
            HeaderCommon,
        }
    }
</script>

<template>
    <div class="wrapper">
        <div class="header">
            <header-common></header-common>
        </div>
        <div class="container">
            <filter-wrapper></filter-wrapper>
            <wrapper-candidates></wrapper-candidates>
        </div>
    </div>
</template>

<style lang="scss">
    .header {
        padding: 0 16px;
    }
    .wrapper {
        max-width: 1150px;
        width: 100%;
        margin: 0 auto;
    }
    .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
</style>