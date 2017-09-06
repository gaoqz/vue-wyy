import App from '../App.vue'

const My = r => require.ensure([], () => r(require('../components/my/my.vue')), 'my')
const Find = r => require.ensure([], () => r(require('../components/find/find.vue')), 'find')
const Friends = r => require.ensure([], () => r(require('../components/friends/fridens.vue')), 'friends')
const Search = r => require.ensure([], () => r(require('../components/search/search.vue')), 'search')

export default [{
    path: '/',
    component: App,
    children: [{
            path: '',
            redirect: '/my'
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/find',
            component: Find
        },
        {
            path: '/friends',
            component: Friends
        },
        {
            path: '/search',
            component: Search
        }
    ]
}]