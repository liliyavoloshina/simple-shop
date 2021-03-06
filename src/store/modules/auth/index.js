import mutations from '@/store/modules/auth/mutations'
import actions from '@/store/modules/auth/actions'
import getters from '@/store/modules/auth/getters'

export default {
  namespaced: true,
  state() {
    return {
      cart: []
    }
  },
  mutations,
  actions,
  getters
}