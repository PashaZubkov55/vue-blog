
import Vue from 'vue'
export default {
    state: {
        user: {},
        users:[],
        login: false

    },
    getters:{
        userData(state){
          return  state.user
        },

        login(state){
            return state.login
        }
    },
    mutations: {
        setUser(state, payload){
            const  user = payload
            state.user = JSON.parse(user)
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
