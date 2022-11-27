import { Candidates } from '../../contracts';
export const candidatesStore = {
    state: {
        candidates: Candidates,
        takenCandidates: 0,
    },
    mutations: {
        addCandidate: (state) => {
            state.takenCandidates++;
        },
        deleteCandidate: (state) => {
            state.takenCandidates--;
        }
    }
}