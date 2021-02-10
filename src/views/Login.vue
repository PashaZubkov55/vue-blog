<template>
    <div class="content">
      <div class="content__wrapper">
          <div class="content__form">
        <form  
        class = 'form' 
        action="form"
        @submit.prevent="onSubmit"
        >
            <div class="form__title">Авторизация</div>
            <div class="form__label">
                <label class="label">Логин</label>
            </div>
            <div class="form__input">
                <input 
                class="input" 
                type="text"
                v-model="login"
                >
            </div>

            <small 
            class="form-error"
            v-if="$v.login.$dirty && !$v.login.required"
                >
                Логин не должен быть пустым
                </small>


           
            <div class="form__label">
                <label class="label">Пороль</label>
            </div>
            <div class="form__input">
                <input 
                class="input" 
                type="password"
                v-model="password"
                >
            </div>

             <small 
             class="form-error"
            v-if="$v.login.$dirty && !$v.password.required"
                >
              Пороль не должен быть пустым 
                </small>

                 <small 
                class="form-error"
                v-else-if="!$v.password.minLength"
                >
                Пороль должен быть {{$v.password.$params.minLength.min}} синволов, а у вас {{password.length}}
                </small>



           
            <div class="form__message">
                Не зарегистрированны ? Зарегистрироватся
            </div>

            <div class="form__button">
                <button class="btn">Войти</button>
            </div>
                
        </form>
    </div>
      </div>
    </div>
    
</template>

<script>
 import { email, required, minLength  } from 'vuelidate/lib/validators';
export default {
  name :'login',
  data: () => ({
    login: '',
    password: '',
    

  }),
  validations: {
    login: {required},
    password: {required , minLength: minLength(6)},

  },
  methods: {
    onSubmit(){
     if(this.$v.$invalid){
       this.$v.$touch()
       return 
     }
     this.$store.dispatch('getUsers')
     let data = localStorage.getItem('data')
     let  users = JSON.parse(data)
      for(let user of users){
        if (user.login == this.login && user.password == this.password ){
          console.log('верно')
          localStorage.clear()
          localStorage.setItem('user', JSON.stringify(user))

          this.$router.push('/')
        

        
          
        }
      }


    
    

    }
     }
  }


</script>