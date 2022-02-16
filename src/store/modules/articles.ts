import axios from "axios";

const state = {
    articles: []
};
const mutations = {
    setData(state, payload){
        state.aericles = payload;
    }
};
const getters = {
    getById: (state, getters) => (id) => {
        return state.articles.find(item => item.id === parseInt(id));
    }
};
const actions = {
    async fetchApi({ commit }) {
        const res = await axios.get("https://cpi-serve.herokuapp.com/articles");
        commit("setData", res.data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}