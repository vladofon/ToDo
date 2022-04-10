import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import MainPage from '@/view/MainPage.vue'

const routes = [
	{path: '/', component: MainPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router