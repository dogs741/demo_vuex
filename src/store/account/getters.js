export default {
    filters: (state, getters, rootState, rootGetters) => {
        return state.list.filter(val => val > 2);
    }
}