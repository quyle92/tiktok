import { default as Home } from '~/pages/Home'
import { default as Following } from '~/pages/Following'
import { default as Profile } from '~/pages/Profile'
import { default as Upload } from '~/pages/Upload'
import { default as Search } from '~/pages/Search'
import { DefaultLayout, HeaderOnly } from '~/components/Layout/'

export const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout
    },
    {
        path: '/following',
        component: Following,
        layout: DefaultLayout
    },
    {
        path: '/profile',
        component: Profile,
        layout: HeaderOnly
    },
    {
        path: '/upload',
        component: Upload,
    },
    {
        path: '/search',
        component: Search
    }
]

export const privateRoutes = [

]