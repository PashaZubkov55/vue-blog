
import Vue from 'vue'
export default {
    state: {
        users:[]

    },
    getters:{
            users(state){
                 return state.users
            }
    },
    mutations: {
        changeUser(state,payload){
            state.users.push(payload)
        }
  
    },
    actions: {
      async  setUser(context, payload){
           await Vue.http.post('http://localhost:3000/users', payload)
        
         },
         getUsers(context,){
             Vue.http.get('http://localhost:3000/users')
             .then((res)=>{
                return res.json()
             })
             .then(data=>{
                localStorage.setItem('data', JSON.stringify(data))
             })
         }
            




        }
    }
