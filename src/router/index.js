import Vue from 'vue'
import Router from 'vue-router'
import Singer from 'components/singer/singer'
import Seach from 'components/seach/seach'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/seach',
      component: Seach
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})
