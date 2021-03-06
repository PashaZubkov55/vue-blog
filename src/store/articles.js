import Vue from 'vue'
export default {
    state :{
        articles:[]
    },
    getters: {
        articles(state){
            return state.articles
        },
        articleBiId(state){
            return articleId => {
                return state.articles.find(
                    (article)=> {
                        if(article.id == articleId){
                            return article
                        }
                    }
                    )
            }
        }
        

        },
    mutations:{
        getArticles(state, payload){
            state.articles = payload
        },

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
        },
        deleteArticle( copntext ,payload){
            Vue.http.delete(`http://localhost:3000/articles/${payload.id}`,payload)    
        },

        apdateArticle(context, payload){
            Vue.http.put(`http://localhost:3000/articles/${payload.id}`, payload)
        }




    }
 }
