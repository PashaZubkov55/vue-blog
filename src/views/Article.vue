<template>
     <div class="content">
                <div class="content__wrapper">
                    <div class="article"
                
                    >
                        <div class="article__wrapper">
                            <div class="article__title">
                               <h1>{{article.title}}</h1>
                            </div>
                            <div class="article__text">{{article.text}}</div>
                            <div class="article__footer">
                                <button class=" btn btn_succes">Подробнее</button>
                                <button class=" btn  btn_error">Удалить</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    props: ['id'],
    computed:{
        article (){
            const id =  +this.id 
            return this.$store.getters.articleBiId(id)
        },
    },
        
}
</script>