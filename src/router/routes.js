import Home from '@/components/pages/Home'
import Contacts from '@/components/pages/Contacts'
import Auth from '@/components/pages/Auth'

export default [
  {
    path: '*',
    redirect: '/auth'
  },
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
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
