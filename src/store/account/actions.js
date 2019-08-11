import * as type from './type'

export default {

    [type.ACCOUNT_ADD_NUMBER]({commit, dispatch, getters, rootGetters}, nums = 1) {
        return new Promise((reslove, reject) => {
            commit(type.ACCOUNT_SET_NUMBER, nums);
            setTimeout(reslove, 1000, 'finish');
        })
    },
    [type.ACCOUNT_GLOBAL_ADD_NUMBER]: {
        root: true,
        handler({commit}, nums = 2) {
            commit(type.ACCOUNT_GLOBAL_SET_NUMBER, nums, { root: true });
        }
    }

}