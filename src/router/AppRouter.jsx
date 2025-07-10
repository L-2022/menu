import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MenuPage from '../pages/menu';
import MenuPageEx1 from '../pages/menuFavorits/MenuPage.jsx';
import NotFoundPage from '../pages/notFound';
import Layout from '../components/layout';
import { routes } from './routes';

const AppRouter = () => {
    return (
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        {/*<Route path={routes.menu} element={<MenuPage />} />*/}
                        <Route path={routes.menu_example_1} element={<MenuPageEx1 />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
    );
};

// const AppRouter = () => {
//     return (
//             <Router
//                     // Activating the flag to enable the new behavior in React Router v7 (state updates wrapped in React.startTransition)
//                     future={{ v7_startTransition: true }}
//             >
//                 <Routes>
//                     <Route element={<Layout />}>
//                         <Route path={routes.menu} element={<MenuPage />} />
//                         <Route path={routes.menu+routes.menu_example_1} element={<MenuPageEx1 />} />
//                         <Route path="*" element={<NotFoundPage />} />
//                     </Route>
//                 </Routes>
//             </Router>
//     );
// };

export default AppRouter;
