import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import NewStoryView from '../views/NewStoryView.vue'
import StoryView from '../views/StoryView.vue';
import Homeview from '../views/HomeView.vue';
import LogoutView from '../views/LogoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home', 
    },
    {
      path: '/info',
      name: 'info',
      component: LogoutView
    },
    {
      path: '/home',
      name: 'home',
      component: Homeview
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
        path: '/new/draft',
        name: 'newstory',
        component: NewStoryView,
    },
     {
        path: '/story/:storyId',
        name: 'story',
        component: StoryView,
    },

  ]
})


export default router