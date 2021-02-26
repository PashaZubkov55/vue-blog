<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__form">
                <form action="form" class="form" @submit.prevent = 'onSubmit'>
                    <div class="form__title">Новая статья</div>
                        <div class="form__label">
                            <label  class="label">Название статьи</label>
                        </div>
                         <div class="form__input">
                         <input 
                        class="input" 
                        type="text"
                        v-model="title"
                        >
                    </div>
                    <small
                    class="form-error"
                    v-if="!$v.title.required && $v.title.$dirty"
                    >
                    Имя не должно быть пустым 
                    </small>
                    
                    .<div class="form__label">
                            <label  class="label">Текст статьи</label>
                        </div>
                    <div class="form__area">
                    <textarea
                    class="area"
                    v-model="text"
                    >
                    </textarea>
                    </div>
                    <small
                    class="form-error"
                    v-if="!$v.text.required && $v.text.$dirty"
                    >
                    Текст не должен быть пустым 
                    </small>
                     <div class="form__message">
                    Передумали ? На главную
                 </div>
                     <div class="form__button">
                    <button class="btn">Создать</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
export default {
    props:['name'],
     data: () => ({
    title: '',
    text: '',
  }),

  computed:{
      
  },

  validations:{
    title: {required},
    text: {required}
},
methods:{
    onSubmit(){
        if(this.$v.$invalid){
       this.$v.$touch()
       return 
     }
        const article = {
            author: this.name,
            title: this.title,
            text: this.text
        }
        this.$store.dispatch('createArticle', article)
        this.$router.push({name:'home'})
    }
}
}
</script>