import React from 'react';

// react-router-dom
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from 'react-router-dom'
// layouts
import RootLayout from '../layouts/RoutLayouts'
// views
import Home from '../views/home';
import Special from '../views/special';
import Menu from '../views/menu';
import Contact from '../views/contact';

const Routes = () => {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<RootLayout />}>
                <Route index path='/' element={<Home />} />
                <Route  path='/special' element={<Special />} />
                <Route  path='/menu' element={<Menu />} />
                <Route  path='/contact' element={<Contact />} />
            </Route>)
    );
    return <RouterProvider router={routes} />
}

export default Routes