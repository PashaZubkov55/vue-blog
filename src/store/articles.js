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
        getArticles(state, payload){
            state.articles = payload
        }

    },
    actions:{
        createArticle(context,payload){
            Vue.http.post('http://localhost:3000/articles', payload)
        },

        getArticles({commit}){
            Vue.http.get('http://localhost:3000/articles')
            .then(res=>{
              return res.json()
            }).then(articles=>{
                commit('getArticles', articles)
            })
        }



    }
}