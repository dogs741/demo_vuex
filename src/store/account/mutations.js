import * as type from './type'

// export default {
//     state: {
//         count: 0,
//         list: [0,1,2,3,4,5]
//     },
//     mutations: {
//         [type.ACCOUNT_SET_NUMBER](state) {
//             state.count += 1;
//             console.log(this.state.count)
//         }
//     }
// }

export const state = {
    count: 0,
    list: [0,1,2,3,4,5]
}

export const mutations = {
    [type.ACCOUNT_SET_NUMBER](state, nums, rootState) {
        state.count += nums;
        console.log(state.count)
    }
}