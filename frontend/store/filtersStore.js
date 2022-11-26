import { filtersCandidate } from '../../contracts';
export const filtersStore = {
    state: {
        takenSkills: [],
        takenPersonalQualites: [],
        takenProfessionalQualites: [],
        takenCommonPersonalQualites: [],
        
        popularSkillsByIndusrty: filtersCandidate.industriy[0].skills,
        popularPersonallQualitesByIndustry: filtersCandidate.industriy[0].personalQualities,
        popularProfessionalQualitesByIndusrty: filtersCandidate.industriy[0].professionalQualities,
        commonPersonalQualites: filtersCandidate.personalQualities,
    },
    mutations: {
        addTakenPersonalQualites: (state, item) => {
            state.takenPersonalQualites.push(item);
        },
        deleltePersonalQualites: (state, item) => {
            state.takenPersonalQualites = state.takenPersonalQualites.filter((qualite) => qualite.id !== item.id);
        },
        addCommonQualities: (state, item) => {
            state.takenCommonPersonalQualites.push(item);
        },
        delelteCommonQualities: (state, item) => {
            state.takenCommonPersonalQualites = state.takenCommonPersonalQualites.filter((qualite) => qualite.id !== item.id);
        },
        addProfessionalQualites: (state, item) => {
            state.takenProfessionalQualites.push(item);
        },
        deleteProfessionalQualites: (state, item) => {
            state.takenProfessionalQualites = state.takenProfessionalQualites.filter((qualite) => qualite.id !== item.id);
        },
        addSkill: (state, item) => {
            state.takenSkills.push(item);
        },
        deleteSkill: (state, item) => {
            state.takenSkills = state.takenSkills.filter((qualite) => qualite.id !== item.id);
        }
    },
    getters: {
        takenPersonalQualitesIds: state => state.takenPersonalQualites.map((personalQualitie) => personalQualitie.id),
        takenProfessionalQualitesIds: state => state.takenProfessionalQualites.map((professionalQualite) => professionalQualite.id),
        takenSkillsIds: state => state.takenSkills.map((takenSkill) => takenSkill.id),
        takenCommonPersonalQualitesIds: state => state.takenCommonPersonalQualites.map((commonPersonalQualite) => commonPersonalQualite.id),
    },
}