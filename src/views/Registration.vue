<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__form">
        <form 
        class="form" 
        action="form"
        @submit.prevent="onSubmit"
        >
            <div class="form__title">Регистрация</div>

            <div class="form__label">
                <label class="label">Имя</label>
            </div>
            <div class="form__input">
                <input 
                class="input"
                 type="text"
                 v-model="name"
                 >
            </div>
            <small 
            class="form-error"
            v-if="$v.name.$dirty && !$v.name.required" 
            >
            Имя не должно быть пустым  
            </small>
        
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
                type="text"
                v-model="password"
                >
            </div>

             <small 
            class="form-error"
            v-if="$v.password.$dirty && !$v.password.required" 
            >
        Пороль не должен быть пустым 
            </small>
              <small 
            class="form-error"
            v-if="$v.password.$dirty && !$v.password.minLength" 
            >
        Пороль должен быть {{$v.password.$params.minLength.min}} синволов, а у вас {{password.length}}
            </small>
            
        


            <div class="form__message">
                Уже зарегистрированны ? Войти
            </div>

            <div class="form__button">
                <button class="btn">Зарегистрироватся</button>
            </div>
                
        </form>
        </div>
        </div>
    </div>
     
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
export default {
    data: ()=>({
        name: '',
        login: '',
        password: '',
    }),
    validations:{
        name:{required},
        login:{required},
        password:{required, minLength: minLength(6)},
    },
    methods:{
        onSubmit(){ 
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }
            let user = {
                name: this.name,
                login: this.login,
                password: this.password
            }
           this.$store.dispatch('setUser', user)
            
        }
    }
}
</script>