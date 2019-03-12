import { getInfo } from '../../api/login';

export default {
  namespace: true,
  state: {
    user: {
      name: 'zhouyao',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
      address: '北京',
      welcome: '欢迎',
      timefix: '2019-01-27',
      position: ''
    },
    token: 123456,
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo({ token: state.token }).then(response => {
          const data = response
          if (data.role && data.role.length > 0) {
            commit('SET_ROLES', data.role)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

}
