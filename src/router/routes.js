import Home from '@/components/pages/Home'
import Contacts from '@/components/pages/Contacts'
import Auth from '@/components/pages/Auth'
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
    redirect: to => {
      return store.getters.isLoggedIn ? '/home' : '/auth'
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
