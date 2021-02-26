import Vue from 'vue'
export default {
    state :{
        articles:[]
    },
    getters: {
        articles(state){
            return state.articles
        }

    },
    mutations:{

    },
    actions:{
        createArticle(context,payload){
            Vue.http.post('http://localhost:3000/articles', payload)
        }

    }
}