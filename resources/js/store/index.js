import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import setting from './modules/setting'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		account,
		setting,
		permission
	},
	getters
})