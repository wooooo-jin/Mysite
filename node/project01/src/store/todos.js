import VueCookies from 'vue-cookies'

export const todo = {

    namespaced:true,
    
    state(){
        return{
          todos:[
            {id:1, title:'할일 1', done: true},
            {id:2, title:'할일 2', done: false},
            {id:3, title:'할일 3', done: false},
          ],
          userInfo: {
            name : 'Pieter kim',
            email:'woojin@naver.com',
          },
          loginUser: true
        }
      },
      // Computed (state에 저장된 데이터의 computed를 정의하는 공간)
      
      getters: {
        todosCount(state){
          return state.todos.length
        },
        donetodosCount(state){
          return state.todos.filter((todo) => todo.done).length
        },
        notDonetodosCount(state){
          return state.todos.filter((todo) => !todo.done).length
        },
        isLogin(state){
          if(VueCookies.get('userInfo')){
            state.loginUser = true
           // return true
          }          
          else{
            state.loginUser = false
            //return false
          }
        }  
      },

      //state를 변경할 수 있는 함수가 정의되는 공간  직접적으로 변경 뮤테이션즈  // 매서드를 정의하는 공간 // 데이터를 변경 해주는 공간
      mutations: {
        add(state, item) {
          state.todos.push(item)
        },
        remove(state, id){
          state.todos = state.todos.filter((todo)=>todo.id !== id)
        },
        doneYN(state, doneState){
          state.todos.filter((todo) => todo.id === doneState.id)[0].done = doneState.done
        },
        removeAll(state) {
          state.todos = []
        },
        setUserInfo(state) {
          console.log(state.userInfo)
          VueCookies.set('userInfo', state.userInfo, '30s')
        }
      },
      // commit(mucations에 정의된 함수를 커밋을 통해서 변경)  액션
      // 비동기 처리  mutations을 가져다가 commit
      // $store.dispatch(add)
      actions: {
        add({commit}, item) {
          commit('add', item)
        },
      },
    }
    