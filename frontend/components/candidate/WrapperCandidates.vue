<script>
    import { useStore } from 'vuex';
    import { computed, unref } from 'vue';
    import Candidate from './components/Candidate.vue';
    export default {
        components: {
            Candidate,
        },

        setup() {
            const store = useStore();

            const takenPersonalQualites = computed(() => store.getters.takenPersonalQualitesIds);
            const takenProfessionalQualites = computed(() => store.getters.takenProfessionalQualitesIds);
            const takenSkills = computed(() => store.getters.takenSkillsIds);
            const takenCommonPersonalQualites = computed(() => store.getters.takenCommonPersonalQualitesIds);
            const candidates = computed(() => store.state.candidatesStore.candidates);

            const procentPersonalQualites = (allTakenPersonalQualites, personalQualites) => {
                if(!allTakenPersonalQualites.length) return 0;
                const procentPersonalQualites = personalQualites.filter((personalQualite) => unref(allTakenPersonalQualites).indexOf(personalQualite.id) !== -1);
                return procentPersonalQualites.length;
                
            };
            const procentProfessionalQualites = (allTakenProfessionalQualites, professionalQualites) => {
                if(!allTakenProfessionalQualites.length) return 0;
                const procentProfessionalQualites = professionalQualites.filter((personalQualite) => allTakenProfessionalQualites.indexOf(personalQualite.id) !== -1);
                return procentProfessionalQualites.length;
                
            };
            const procentSkills = (allTakenSkils, personalQualite) => {
                if(!allTakenSkils.length) return 0;
                const procentSkills = skills.filter((personalQualite) => allTakenSkils.indexOf(personalQualite.id) !== -1);
                return procentSkills.length;
                
            };
            const procentCommonPersonalQualites = (allTakenCommonPersonalQualites, personalQualites) => {
                if(!allTakenCommonPersonalQualites.length) return 0;
                const procentCommonPersonalQualites = personalQualites.filter((personalQualite) => allTakenCommonPersonalQualites.indexOf(personalQualite.id) !== -1);
                return procentCommonPersonalQualites.length;
                
            };

            const getCandidatesByProcent = computed(() => {
                return unref(candidates).map((canidate) => {
                    const allTakenPersonalQualites = unref(takenPersonalQualites);
                    const allTakenProfessionalQualites = unref(takenProfessionalQualites);
                    const allTakenSkils = unref(takenSkills);
                    const allTakenCommonPersonalQualites = unref(takenCommonPersonalQualites);
                    
                    const _procentPerosnalQualites = procentPersonalQualites(allTakenPersonalQualites, canidate.personalQualities);
                    const _procentProfessionalQualites = procentProfessionalQualites(allTakenProfessionalQualites, canidate.professionalQualities);
                    const _procentSkillsQualites = procentSkills(allTakenSkils, canidate.skills);
                    const _procentCommonPersonalQualites = procentCommonPersonalQualites(allTakenCommonPersonalQualites, canidate.personalQualities);
                    
                    const allMathes = _procentPerosnalQualites + _procentProfessionalQualites + _procentSkillsQualites + _procentCommonPersonalQualites;
                    const allTaken = allTakenPersonalQualites.length + allTakenProfessionalQualites.length + allTakenSkils.length + allTakenCommonPersonalQualites.length;
                    const procentValue = Math.floor((allTaken === 0 ) ? 0 : allMathes / (allTaken / 100));

                    return {
                        ...canidate,
                        procentValue 
                    }
                })
            });

            const sortCandidatesByProcent = computed(() => unref(getCandidatesByProcent).sort((a, b) => b.procentValue - a.procentValue));

            return {
                _candidates: sortCandidatesByProcent,
            }
        }
    }
</script>

<template>
    <div class="candidates-wrapper">
        <candidate
            v-for="candidate in _candidates"
            :nameProfession="candidate.name"
            :personalQualites="candidate.personalQualities"
            :professionalQualites="candidate.professionalQualities"
            :skills="candidate.skills"
            :procentValue="candidate.procentValue"
        ></candidate>
    </div>
</template>

<style lang="scss">

</style>