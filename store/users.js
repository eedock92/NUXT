export const state = () => ({
    userInfos : [
        {name : 'pjt', id: 0, age : '26'}
    ]
})

export const mutations = {
    add(state, userInfo){
        state.userInfo.push(userInfo)
    }
} 

export const getters = {
    userInfos(state) {
        return state.userInfos
    }
}