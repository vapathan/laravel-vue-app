import Dashboard from "../Pages/Dashboard";
import EmptyPage from "../Pages/EmptyPage";
import PracticePage from "../Pages/PracticePage";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/about',
        name: 'about',
        component: EmptyPage,
    },
    {
        path: '/practice',
        name: 'practice',
        component: PracticePage,
    },
];

export  default routes;

