const getters = {
  token: state => state.account.token,
  roles: state => state.account.roles,
  addRouters: state => state.permission.addRouters
};
export default getters