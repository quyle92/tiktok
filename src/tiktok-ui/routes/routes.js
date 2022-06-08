import { default as Home } from '~/pages/Home';
import { default as Following } from '~/pages/Following';
import { default as Profile } from '~/pages/Profile';
import { default as Upload } from '~/pages/Upload';
import { default as Search } from '~/pages/Search';
import { DefaultLayout, HeaderOnly } from '~/layout';
import routesConfig from '~/config';

const publicRoutes = [
    {
        path: routesConfig.routes.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: routesConfig.routes.following,
        component: Following,
        layout: DefaultLayout,
    },
    {
        path: routesConfig.routes.profile,
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.routes.upload,
        component: Upload,
    },
    {
        path: routesConfig.routes.search,
        component: Search,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
