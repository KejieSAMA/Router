import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MovieHomeView from '../views/MovieHomeView.vue'
import MovieShowView from '../views/MovieShowView.vue'
import MovieInfoView from '../views/MovieInfoView.vue'
import UserLoginView from '../views/UserLoginView.vue'
import UserRegisterView from '../views/UserRegisterView.vue'
import CinemaView from '../views/CinemaView.vue'
import GewaraView from '../views/GewaraView.vue'
import TicketingView from '../views/TicketingView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import SeatView from '../views/SeatView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MovieHomeView
  },
  {
    path: '/movieshow',
    name: 'movie',
    component: MovieShowView
  },
  {
    path: '/filetick',
    name: 'tick',
    component: TicketingView
  },
  {
    path: '/cinemaHome',
    name: 'cinema',
    component: CinemaView
  },
  {
    path: '/gewara',
    name: 'gewara',
    component: GewaraView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/file/movieInfo',
    name: 'movieInfo',
    component: MovieInfoView
  },
  {
    path: '/pc/login',
    name: 'useLogin',
    component: UserLoginView
  },
  {
    path: '/pc/register',
    name: 'useRegister',
    component: UserRegisterView
  },
  {
    path: '/file/schedule',
    name: 'schedule',
    component: ScheduleView
  },
  {
    path: '/file/seat',
    name: 'seat',
    component: SeatView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
