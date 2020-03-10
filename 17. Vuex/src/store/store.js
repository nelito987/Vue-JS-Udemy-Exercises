import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        singleCounter: state => {
            return state.counter;
        },
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: (state, payload) => {
            console.log('mutations --- increment')
            state.counter+= payload;
        },
        decrement: (state, payload) => {
            console.log('mutations --- increment')
            state.counter-=payload;
        }
    },
    actions: {
        increment: ({ commit }, payload) => {
            console.log('actions --- increment')
            commit('increment', payload);
        },
        decrement: ({ commit }) => {
            console.log('actions --- decrement')
            commit('decrement', 150);
        },
        incrementAsync: (context, payload) => {
            console.log('actions --- incrementAsync')
            console.log(payload)
            setTimeout(() => {
                context.commit('increment', payload.by);
            }, payload.duration);
        },
        decrementAsync: ({ commit }, payload) => {
            console.log('actions --- decrementAsync')
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        }

    }
})