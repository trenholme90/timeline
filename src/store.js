import Vue from 'vue'
import Vuex from 'vuex'
// import 'es6-promise/auto'
import * as json from '../schema.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: json
  }
})

export default store
