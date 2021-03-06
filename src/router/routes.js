import Home from '@/components/pages/Home'
import Contacts from '@/components/pages/Contacts'
import Auth from '@/components/pages/Auth'
import Editor from '@/components/pages/Editor'
import store from '../store'

export default [
  {
    path: '*',
    redirect: '/auth'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      store.getters.isLoggedIn ? next() : next('/auth')
    }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
    beforeEnter: (to, from, next) => {
      store.getters.isLoggedIn ? next() : next('/auth')
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]
