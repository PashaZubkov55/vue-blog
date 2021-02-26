<template>
     <div class="content">
                <div class="content__wrapper">
                        <div class="cardts">
                            <div class="carrds__items">
                            <div class="cardts__item">
                                <div class="person"
                                >
                                    <div class="person__item person__item_name">{{user.name}}</div>
                                    <div class="person__item">{{user.login}}</div>
                                    <div class="person__item">{{user.password}}</div>
                                  
                                </div>
                                 <div class="person__item person__item_btn">
                                    <button class="btn btn_succes">Изменить</button>
                                   </div>
                                
                            </div>
                            <div class="cardts__item">
                                <div class="person">
                                    <div class=" person__item person__item_massage">Чтобы посмотреть ваши статьи нажмите сюда:</div>
                                   <div class="person__item person__item_btn">
                                    <button class="btn btn_succes">Мои статьи</button>
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

        }
        
    },
    methods:{
        setUser(){
            this.$store.commit('setUser', localStorage.getItem('user'))
        
        }
    },

     mounted(){
        this.setUser()


         
}
}
</script>