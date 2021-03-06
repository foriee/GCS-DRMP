
import cform from './views/cform';
import cslider from './views/cslider';
const layout =  (resolve) => require(['./views/layout/layout.vue'], resolve);
const maptype =  (resolve) => require(['./views/gcs/maptype.vue'], resolve);
const mapds =  (resolve) => require(['./views/gcs/mapds.vue'], resolve);
const maplist =  (resolve) => require(['./views/gcs/maplist.vue'], resolve);
const taskmg = (resolve) => require(['./views/taskmg/taskmg.vue'], resolve);
const svcconfig = (resolve) => require(['./views/config/svcconfig.vue'], resolve);
const layerspacepreview = (resolve) => require(['./views/gcs/layerspace/layerspace-preview.vue'], resolve);
const routers = [
    {
        path: '',
		redirect: '/datasource',
    },
    {
        path: '/datasource',
		name:'home',
		meta:{
			title:'数据资源平台',
		},
        components: {
			default:layout,
			'layertype':maptype,
			'layerspace':mapds,
			'layer':maplist
		},
		children:[
			{
			    path: 'layertype',
				name:'maptype',
				component: maptype,
			},
			{
			    path: 'layerspace/:layertype',
				name:'layertype',
				component: mapds,
			},
			{
				path: 'layer/:layerspace',
				name:'layer',
				component: maplist,
			},
			{
				path: 'preview/:name',
				name:'layerspace',
				component: layerspacepreview,
			}
		]
    },
    {
        path: '/taskmg',
        components: {
			default:layout
		},
		children:[
			{
			    path: '',
				name:'taskmg',
				redirect: '/taskmg/map/upload',
			},
			{
			    path: ':svc',
				name:'taskmg',
				redirect: ':svc/upload',
			},
			{
			    path: ':svc/:optvalue',
				name:'svctaskmg',
				component: taskmg,
			}
		]
    },
    {
        path: '/config',
        components: {
			default:layout
		},
		children:[
			{
			    path: '',
				name:'svcconfig',
				redirect: '/config/map',
			},
			{
			    path: ':svc',
				name:'svcconfig',
				component: svcconfig,
			}
		]
    }
];
export default routers;