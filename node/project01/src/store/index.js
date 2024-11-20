import { createStore } from 'vuex'
import { todo } from './todos'

export default createStore({
  modules: {
    todo : todo

  }
})


