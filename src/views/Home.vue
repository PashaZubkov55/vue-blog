<template>
 <div class="content">
            <div class="content__wrapper">
                <div class="articles">
                    <div class="articles__items">
                        <div class="articles__item"
                            v-for="article of articles"
                            :key="article.id"
                        >
                            <div class="article">
                                <div class="article__wrapper">
                                    <div class="article__title">{{article.title}}</div>
                                    <div class="article__img">
                                        <img  class='article-img' src="../assets/img/logo.png" alt="article">
                                    </div>
                                    <div class="article__footer">
                                       <router-link
                                        tag="button"
                                        class="btn btn_succes"
                                        :to="'/article/'+article.id"
                                       >
                                           подробнее
                                       </router-link>
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
  name: 'Home',
  methods:{
      getArticles(){
          this.$store.dispatch('getArticles')
    
      }
  },
  computed:{
      articles(){
          return this.$store.getters.articles
      }
      
  },
  mounted(){
      this.getArticles()

    
  }

}
</script>
