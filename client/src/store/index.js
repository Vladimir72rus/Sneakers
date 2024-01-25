import { createStore } from 'vuex'
import { commonModule } from '@/store/commonModule'

export default createStore({
  modules: {
    common: commonModule
  }
})
