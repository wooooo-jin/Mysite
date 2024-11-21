import { createStore } from 'vuex'
import { todo } from './todos'
import persistedstate from 'vuex-persistedstate'



export default createStore({
  modules: {
    todo : todo,
  },
  plugins:[persistedstate({paths:['todo.todos']})] //이곳에 데이터를 추가 한 것을 저장을 하게 해준다.(플러그인 사용) 
  // 쿠키는 일정 시간이 지나면 삭제되는 데이터
  // 로컬 스토리지의 역할은 저장하고 싶은 데이터를 저장하게 해줌. 영구적으로 저장이 되어도 무방하겠다. 예)장바구니, 웹툰 본 기록 등
})


