<template>
    <div class="container">
         <header class="header">
            <div class="header__wrapper">
                <div class="header__left">
                    <div class="header__logo">
                        <img class="logo" src="../assets/img/logo.png" alt="icon">
                   
                    </div> 
                    <div class="header__title">
                        - Blog
                    </div>
                </div>
                <div class="header__right">
                <nav class="header__menu menu">
                    <ul class="menu__items">
                    <li
                    v-for="link of links"
                    :key="link.name"
                    class="menu__item"
                    @click="link.path"
                    >{{link.name}}
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
        <router-view />

</div>
</template>
<script>
export default {
   data (){
       return{
           menu:[
                {
                   name:'Мой профиль',
                    path: ()=>{
                                this.$router.push('/profile')
                            }
               },
               {
                            name: 'Выход',
                             path: ()=>{
                                localStorage.clear()
                                this.$router.push('/')
                            }
               }

           ]
       }
   },
   computed:{
        user(){
         return this.$store.getters.userData

        },
        login(){
          return this.$store.getters.login
        },
       links(){

           if (this.login == true) {
                return  this.menu =[
                {
                   name:'Профиль',
                    path: ()=>{
                                this.$router.push('/profile')
                            }
               },
                {
                            name: 'Создать статью',
                             path: ()=>{
                                
                                this.$router.push(`/newArticle/${this.user.name}`)
                            }
               },
               {
                            name: 'Выход',
                             path: ()=>{
                                 this.$store.commit('login', false)
                                 localStorage.clear()
                                this.$router.push('/')
                            }
               }
               


           ]
           } else{
                return  this.menu = [
                {
                   name:'Войти ',
                    path: ()=>{
            
                                this.$router.push('/login')
                            }
               },
               {
                            name: 'Регистрацыя',
                             path: ()=>{
                            localStorage.clear()
                              this.$router.push('/registration')

                            }
               }

           ]

           }
            
          
       },
      

   }
   
    
}
</script>