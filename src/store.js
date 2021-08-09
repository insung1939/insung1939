import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        integer: 1
    },
    getters: {
        gettersCount: function(state){
            return state.count * (state.count - 1)
        }
    },
    mutations: {
        mutationsTriple: function(state){
            return state.integer *= 3
        }
    },
    actions: {
        actionsTime: function(context){
            //commit의 대상인 mutationsTriple mutations 의 메서드를 의미
            return setTimeout(function(){
                context.commit('mutationsTriple');
            },3000
            )
        }
    }
});