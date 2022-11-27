<script>
    import Procent from './Procent.vue';
    import Qualites from './Qualites.vue';
    import Tooltip from '@/components/tooltip/Tooltip.vue';
    import ButtonCompareCandidate from './ButtonCompareCandidate.vue';
    export default {
        components: {
            Procent,
            Qualites,
            ButtonCompareCandidate,
            Tooltip,
        },
        props: {
            idCanidate: Number,
            nameProfession: String,
            skills: Array,
            personalQualites: Array,
            professionalQualites: Array,

            takenSkills: Array,
            takenPersonalQualites: Array,
            takenProfessionalQualites: Array,
            takenCommonQualites: Array,
            procentValue: {
                type: Number,
                default: () => 0,
            }
        },
        setup(props, { emit }) {
            const canidadateClick = (idCanidate) => {
                emit('clickCandidate', idCanidate)
            }
            const candidateDelete = () => {
                emit('deleteCandidate')
            };
            return {
                canidadateClick,
                candidateDelete,
            }
        }
    }
</script>

<template>
    <div class="candidate">
        <div class="candidate__wrapper">
            <div class="candidate__up">
                <div class="candidate__name">
                    <div class="candidate__name-profession"> {{ nameProfession }} </div>
                    <tooltip v-if="procentValue > 85">
                        <template #content>
                            Идеальный кандидат
                        </template>
                        <template #icon>
                            <div class="candidate__name-icon"></div>
                        </template>
                    </tooltip>
                </div>
                <procent
                    :procent="procentValue"
                ></procent>
            </div>
            <div class="candidate__middle">
                <qualites
                    :qualitesItems="personalQualites"
                    :takenQualites="takenPersonalQualites"
                > <template #label> Личные качества: </template> </qualites>
                <qualites
                    :qualitesItems="professionalQualites"
                    :takenQualites="takenProfessionalQualites"
                > <template #label> Профессиональные качества: </template> </qualites>
                <qualites
                    :qualitesItems="skills"
                    :takenQualites="takenSkills"
                > <template #label> Навыки: </template> </qualites>
            </div>
            <div class="candidate__down">
                <button-compare-candidate
                    @clickCandidate="canidadateClick"
                    @deleteCandidate="candidateDelete"
                >

                </button-compare-candidate>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .candidate {
        margin-bottom: 40px;
        &__name-icon {
            background-image: url('./images/icon-best.svg');
            background-repeat: no-repeat;
            background-position: center;
            width: 16px;
            height: 16px;
            cursor: pointer;
        }
        &__middle {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        &__up {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
        }
        &__name {
            display: flex;
            align-items: center;
        }
        &__name-profession {
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            font-size: 18px;
            margin-right: 4px;
        }
        &__wrapper {
            padding: 16px;
            background: #FFFFFF;
            box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.25);
            border-radius: 6px;
            max-width: 720px;
        }
        &__down {
            margin-top: 16px;
        }
    }
</style>