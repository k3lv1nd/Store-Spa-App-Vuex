import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

const state = {
    user:{},
    logind:{},
    forSale: [
        { invId: 1, name: 'Hd Television', image: '//placehold.it/200', price: 999 },
        { invId: 2, name: 'Samsung Galaxy pro', image: '//placehold.it/200', price: 1499 },
        { invId: 3, name: ' Sony Fridge', image: '//placehold.it/200', price: 499 },
        { invId: 4, name: 'Sony sub-Woofer', image: '//placehold.it/200', price: 299 },
        { invId: 5, name: 'Hd Television', image: '//placehold.it/200', price: 999 },
        { invId: 6, name: 'Samsung Galaxy pro', image: '//placehold.it/200', price: 1499 },
        { invId: 7, name: ' Sony Fridge', image: '//placehold.it/200', price: 499 },
        { invId: 8, name: 'Sony sub-Woofer', image: '//placehold.it/200', price: 299 },
    ],
    inCart: []

};

const getters = {

    user: state=>state.user,
    logind:state=>state.logind,
    forSale: state => state.forSale,
    inCart: state => state.inCart,

};

const mutations = {

    ADD_USER(state, user){
        state.user = user
    },
    GET_USER(state, logind){
        state.logind = logind
    },
    ADD_TO_CART(state, invId) {
        state.inCart.push(invId);
    },
    ADD_FOR_SALE: (state, payload) => {

        var item = {
            invId: forSale.id,
            name: forSale.name,
            price: forSale.price,
            image: '//placehold.it/200'

        }


    }
}
const actions = {
    addToCart(context, invId)
    { context.commit('ADD_TO_CART', invId); },

    addforSale: (context, forSale) => {
        context.commit("ADD_FOR_SALE", forSale)
    },
};

const store = new Vuex.Store({
    state, getters, mutations,actions
});

export default store;