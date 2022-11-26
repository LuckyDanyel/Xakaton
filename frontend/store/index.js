import { createStore } from 'vuex';
import { filtersStore } from './filtersStore';
import { candidatesStore } from './candidatesStore';

export const store = createStore({
    modules: {
        filtersStore,
        candidatesStore,
    }
})