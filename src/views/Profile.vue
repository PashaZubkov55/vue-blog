<template>
     <div class="content">
                <div class="content__wrapper content__wrapper_profile">
                       <div class="person">
                           <div class="person__wrapper">
                               <div class="person__title">
                                   <h1>Мои данные</h1>
                               </div>
                            <div class="person__name">{{user.name}}</div>
                            <div class="person__login">{{user.login}}</div>
                            <div class="person__footer">
                                <button class=" btn btn_succes">Изменить</button>
                        </div>
                           </div>
                       </div>
                        
                       <div class="articles">
                           <div class="article__atems">
                        <div class="articles__item"
                            v-for="article in myArticlesFilters"
                            :key="article.id"
                        >  
                            <div class="article">
                                <div class="article__wrapper">
                                    <div class="article__title">{{article.title}}</div>
                                    <div class="article__img">
                                        <img  class='article-img' src="../assets/img/logo.png" alt="article">
                                    </div>
                                    <div class="article__footer">
                                        <button class=" btn btn_succes">Подробнее</button>
                                        <button 
                                        class=" btn  btn_error"
                                        @click="deleteArticle(article)"
                                        >Удалить</button>
                                </div>
                                </div>
                            </div>
                        </div>
                           </div>
                       </div>
                </div>           
            </div>
        
</template>
<script>
export default {
    computed:{
        user(){
         return this.$store.getters.userData

        },
        articles(){
             return this.$store.getters.articles
        },
         myArticlesFilters(){
           return this.articles.filter((article)=>{
                if (article.author === this.user.name) {
                   return article
                    
                }
            })
        }

    },
    methods:{
        setUser(){
            this.$store.commit('setUser', localStorage.getItem('user'))
        }, 
        deleteArticle(payload){
            this.$store.dispatch('deleteArticle',payload)
            this.$router.push({name: 'home'})
        }
    },

     mounted(){
        this.setUser()

         
}
}
</script>