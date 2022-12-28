import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import OnlyHeaderLayout from '~/components/Layouts/OnlyHeaderLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: OnlyHeaderLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
