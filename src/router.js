//router.js 路由集合
import common from 'common/js/common'
import indextRouter from 'pages/index/router'

//默认首页路由
const route = [{
	path: '/',
	name: 'index',
	meta: {
		title: '首页demo',
	},
	component: resolve => require(['pages/index/index.vue'], resolve)
}, ]


//合并路由
var routes = route.concat(indextRouter)

module.exports = routes;