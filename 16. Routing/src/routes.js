import Home from './components/Home.vue';
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';

//make separate bundle for 'user' scripts - webpack lazy loading
//webpack will group any async module with the same chunk name into the same async chunk.
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};


export const routes = [
    { path: '', component: Home },
    {
        path: '/user', component: User, children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}

        ]
    },
    //redirect all incorrect routes to the home page
    { path: '*', redirect: '/'}
]

