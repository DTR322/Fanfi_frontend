import { createRouter, createWebHistory } from 'vue-router'
import GuidesView from "@/views/GuidesView.vue";
import GuideInstanceView from "@/views/GuideInstanceView.vue";
import HomeView from "@/views/HomeView.vue";
import FanficsView from "@/views/FanficsView.vue";
import FanficInstanceView from "@/views/FanficInstanceView.vue";
import ProfileView from "@/views/ProfileView.vue";
import HedgehogCombat from "@/views/HedgehogCombat.vue";
import FanficsHome from "@/views/FanficsHome.vue";
import tic_tac_toe from "@/views/tic_tac_toe.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "HomeView",
      path: "/",
      component: HomeView
    },
    {
    path: '/GuidesView',
    name: 'GuidesView',
    component: GuidesView
    },
    {
     path: "/GuideInstanceView",
     name: "GuideInstanceView",
     component: GuideInstanceView
    },
    {
      path: "/FanficsView",
      name: "FanficsView",
      component: FanficsView
    },
    {
      path: "/FanficInstanceView",
      name: "FanficInstanceView",
      component: FanficInstanceView
    },
    {
      path: "/ProfileView",
      name: "ProfileView",
      component: ProfileView
    },
    {
      path: "/HedgehogCombat",
      name: "HedgehogCombat",
      component: HedgehogCombat
    },
    {
      path: "/FanficsHome",
      name: "FanficsHome",
      component: FanficsHome
    },
    {
      path: "/tic_tac_toe",
      name: "tic_tac_toe",
      component: tic_tac_toe
    }
  ]
})

export default router
