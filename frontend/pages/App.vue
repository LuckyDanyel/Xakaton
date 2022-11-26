<script>
    import WrapperCandidates from '@/components/candidate/WrapperCandidates.vue';
    import FilterWrapper from '../components/filters/FilterWrapper.vue';
    export default {
        components: {
            WrapperCandidates,
            FilterWrapper,
        }
    }
</script>

<template>
    <div class="wrapper">
        <filter-wrapper></filter-wrapper>
        <wrapper-candidates></wrapper-candidates>
    </div>
</template>

<style lang="scss">
    .wrapper {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        padding-top: 50px;
    }
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
</style>