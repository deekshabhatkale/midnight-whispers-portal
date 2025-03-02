import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from '../views/ProfileView.vue';
import NewStoryView from '../views/NewStoryView.vue';
import StoryDetails from '../components/StoryDetails.vue';
import HomeView from '../views/HomeView.vue';
import LogoutView from '../views/LogoutView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/info',
    name: 'info',
    component: LogoutView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/new/draft',
    name: 'newstory',
    component: NewStoryView,
  },
  {
    path: '/stories/:id',
    name: 'StoryDetails',
    component: StoryDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;