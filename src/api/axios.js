import axios from 'axios'

axios.defaults.baseURL = `${process.env.VUE_APP_FIREBASE_URL}`

export default axios