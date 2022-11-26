<script>
    import { useStore } from 'vuex';
    import Candidate from './components/Candidate.vue';
    export default {
        components: {
            Candidate,
        },

        setup() {
            const store = useStore();
            return {
                candidates: store.state.candidatesStore.candidates
            }
        }
    }
</script>

<template>
    <div class="candidates-wrapper">
        <candidate
            v-for="candidate in candidates"
            :nameProfession="candidate.name"
            :personalQualites="candidate.personalQualities"
            :professionalQualites="candidate.professionalQualities"
            :skills="candidate.skills"
        ></candidate>
    </div>
</template>

<style lang="scss">

</style>