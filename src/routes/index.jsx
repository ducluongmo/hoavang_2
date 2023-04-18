import Home from '~/pages/Home/Home';
import Vankhan from '~/pages/Vankhan/Vankhan';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/vankhan', component: Vankhan }
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }