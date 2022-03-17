import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Accueil from '../components/Accueil.vue'
import Tweet from '../components/Tweet.vue'
import Profile from '../components/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/tweet/:tweetId',
      name: 'tweet',
      component: Tweet,
      props: true
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
