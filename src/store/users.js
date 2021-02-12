
import Vue from 'vue'
export default {
    state: {
        users:[],
        login: false

    },
    getters:{
            users(state){
                 return state.users
            },

        login(state){
            return state.login
        }
    },
    mutations: {
        changeUser(state,payload){
            state.users.push(payload)
        },

        login(state, payload){
                 state.login = payload
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
