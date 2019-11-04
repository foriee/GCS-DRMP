import {
  getMenuByList
} from '@/libs/util'
import data from '@/data/data'

// const closePage = (state, route) => {
//   const nextRoute = getNextRoute(state.tagNavList, route)
//   state.tagNavList = state.tagNavList.filter(item => {
//     return !routeEqual(item, route)
//   })
//   router.push(nextRoute)
// }

export default {
  state: {
    // breadCrumbList: [],
    // tagNavList: [],
    // homeRoute: {},
    // local: localRead('local'),
    // errorList: [],
    // hasReadErrorPage: false
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByList(routers)
    // errorCount: state => state.errorList.length
  },
  mutations: {
   
  },
  actions: {

  }
}
