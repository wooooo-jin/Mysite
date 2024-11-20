import { createStore } from 'vuex'
// vuex는 중앙 저장소
// 모든 컴포넌트에서 사용할 수 있도록 데이터를 관리해주는 라이브러리


export default createStore({
  //저장소(데이터를 저장하는 공간)
  //데이터가 많으면 불러오기 힘드니 return을 쓴다. 다른애들은 데이터가 아니니까 return은 state만 스테이티드
  state(){
    return{
      todos:[
        {id:1, title:'할일 1', done: true},
        {id:2, title:'할일 2', done: false},
        {id:3, title:'할일 3', done: false},
      ]
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
    }
  },
  //commit(mucations에 정의된 함수를 커밋을 통해서 변경)  액션
  // 비동기 처리  mutations을 가져다가 commit
  // $store.dispatch(add)
  actions: {
    add({commit}, item) {
      commit('add', item)
    },
  },
  // 복잡한state와 muthod들을 분리하여 사용할 수 있도록 만들어줌
  modules: {
  }
})
// db랑 state은 다른 공간임!!
// state데이터는 서버 DB에 있는 데이터와 자동 동기화되지 않는다. 일단 불러오는거임. 
// 일단 DB에서 데이터를 받아와서 state에 저장(대입)한다.
// state을 변형하는 기능은 mutation에 있고, state에 있는 데이터를 db로 쏴주는 기능은 비동기로 처리하는데, 
// actions에서는 mutation으로 state를 변경하고 비동기처리(axios)등으로 db에 접근하여 정보를 변경하는 역할을 한다.

