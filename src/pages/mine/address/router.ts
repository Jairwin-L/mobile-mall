const prePath = '/address/'

const router = [
	{
		path: 'list',
		component: () => import('./list'),
	},
	{
		path: 'add',
		component: () => import('./add'),
	},
	{
		path: 'edit',
		component: () => import('./edit'),
	}
]

router.forEach(item => { item.path = prePath + item.path })

export default router;
