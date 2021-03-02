export default {
  ADD_NEW_CATEGORY(state, payload) {
    state.categories.push(payload)
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  REMOVE_CATEGORY(state, payload) {
    const category = state.categories.find((item) => item.id === payload)
    const index = state.categories.indexOf(category)
    if (index !== -1) {
      state.categories.splice(index, 1)
    }
  },
  INCREASE_CATEGORY_COUNT(state, payload) {
    const updatedData = state.categories.map(item =>
      item.id === payload ? { ...item, count: item.count + 1 } : item
    )
    state.categories = updatedData
  },
  DECREASE_CATEGORY_COUNT(state, payload) {
    const updatedData = state.categories.map(item =>
      item.id === payload ? { ...item, count: item.count - 1 } : item
    )
    state.categories = updatedData
  }
}
