import Vuex from 'vuex'

const store = function() {
    new Vuex.Store({
        state: {
            count : 0
        },
        mutations : {
            increment (state) {
                state.count++
            }
        }
    })
}

