<script>
    import WrapperCandidates from '@/components/candidate/WrapperCandidates.vue';
    export default {
        components: {
            WrapperCandidates,
        }
    }
</script>

<template>
    <div class="wrapper">
        <wrapper-candidates></wrapper-candidates>
    </div>
</template>

<style lang="scss">
    .wrapper {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
    }
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
</style>