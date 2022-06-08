import React from 'react';
import GlobalStyles from '~/components/GlobalStyles';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import Profile from './pages/Profile';
import Search from './pages/Search';
import { DefaultLayout, HeaderOnly } from '~/layout';
import { publicRoutes, privateRoutes } from './routes/routes';
export default function App() {
    return (
        <GlobalStyles>
            {/*Option 1: to render child component UI. Layout must have <outlet /> component. Ref: https://stackblitz.com/github/remix-run/react-router/tree/main/examples/multi-app?file=home%2FApp.jsx <Routes>
                 <Routes>
                {
                    publicRoutes.map((route, index) => {
                        const Layout = route.layout ?? ""
                        const Component = route.component
                        const path = route.path
                        return (
                            <Route element={<Layout />} key={index} >
                                <Route path={path} element={< Component />} />
                            </Route>
                        )
                    })
                }
            </Routes> */}
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout ?? React.Fragment;
                    const Component = route.component;
                    const path = route.path;
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </GlobalStyles>
    );
}
