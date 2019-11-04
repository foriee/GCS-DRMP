<template>
<Row style="background:#F5F7F9;padding:20px;height:100%">
	<div>
  <Table size="small"  border  ref="selection"  stripe  :columns="columns" :data="nowData"></Table>
  <div style="margin: 10px;overflow: hidden">
          <div style="float: left;">
              <Page :total="dataCount" :page-size="pageSize" @on-page-size-change="_nowPageSize" @on-change="changePage" show-sizer ></Page>
          </div>
          <div style="float: right;">
        <Button :size="small" style="font-weight: bold;">新增</Button>
        <Button :size="small" style="font-weight: bold;">下载</Button>
        <Button :size="small" style="font-weight: bold;">删除</Button>
          </div>
  </div>
  </div>
</Row>
</template>

<script>
export default {
  data () {
    return {
		pageSize: 10,//每页显示多少条
		dataCount: 0,//总条数
		pageCurrent: 1,//当前页
		nowData:[],
      columns: [
        {
          type: 'selection',
          width: 55,
          align: 'center'
        },
        {
          title: '编号',
          key: 'id',
          width: 80,
          align: 'center',
          sortable: true
        },
        {
          title: '数据名称',
          key: 'name',
          width: 200,
          align: 'center',
          filters: [
            {
              label: 'GlobalImage.tif',
              value: 'GlobalImage.tif'
            },
            {
              label: 'NG51G091014.tif',
              value: 'NG51G091014.tif'
            }
          ],
          filterMethod (value, row) {
            return row.name.indexOf(value) > -1
          }
        },
        // {
        //   title: '创建时间',
        //   key: 'createtime',
        //   width: 160,
        //   align: 'center',
        //   sortable: true
        // },
        {
          title: '数据时相',
          key: 'timestamp',
          width: 160,
          align: 'center',
          sortable: true
        },
        {
          title: '坐标系',
          key: 'crs',
          width: 110,
          align: 'center'
        },
        {
          title: '层级范围',
          key: 'levels',
          width: 90,
          align: 'center',
		  render: (h, params) => {
			  let levels =  params.row.minlevel+'-'+params.row.maxlevel;
			  return h('div', [
				h('Span', {
					
				},
				levels),
              ]);
		  } 
        },
        {
          title: '区域范围',
          key: 'regions',
          width: 157,
          align: 'center',
		  render: (h, params,index) => {
			  let regions =  params.row.minx+','+params.row.miny+','+params.row.maxx+','+params.row.maxy;
			  return h('div', [
				h('Span', {
					
				},
				regions),
              ]);
		  } 
        },
        {
          title: '操作',
          key: 'opt',
          width: 120,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Tooltip', {
                props: {
                  content: '浏览',
                  placement: 'bottom-start'
                }
              },
              [h('Button', {
                props: {
                  size: 'small',
                  type: 'text',
                  shape: 'circle',
                  icon: 'md-eye',
				  to:{path:'/datasource/preview/'+params.row.id}
                }
              })
              ]),
              h('Tooltip', {
                props: {
                  content: '下载',
                  placement: 'bottom-start'
                }
              },
              [h('Button', {
                props: {
                  size: 'small',
                  type: 'text',
                  shape: 'circle',
                  icon: 'md-cloud-download'
                }
              })
              ]),
              h('Tooltip', {
                props: {
                  content: '删除',
                  placement: 'bottom-start'
                }
              },
              [h('Button', {
                props: {
                  size: 'small',
                  type: 'text',
                  shape: 'circle',
                  icon: 'md-remove-circle'
                }
              })
              ])
            ])
          }
        }
      ],
      data: [],
    }
  },
  methods:{
	  changePage: function(index){
		  //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
		  let _start = (index - 1) * this.pageSize;
		  //需要显示结束数据的index
		  let _end = index * this.pageSize;
		  //截取需要显示的数据
		  this.nowData = this.data.slice(_start, _end);
		  //储存当前页
		  this.pageCurrent = index;
	},
	_nowPageSize: function(index) {
	//实时获取当前需要显示的条数
		this.pageSize = index;
      },
  },
	mounted() {
		let layerspace = this.$route.params.layerspace;
		let baseUrl = this.$store.state.accessSvcPath;
		this.$axios.get(baseUrl+"/layer/"+layerspace)
		.then((response)=>{
			this.data = response.data;
			this.dataCount = this.data.length;
			//循环展示页面刚加载时需要的数据条数
			this.nowData = [];
			for (let i = 0; i < this.pageSize; i++) {
			  this.nowData.push(this.data[i]);
			}
		})
	}
}
</script>

<style>
</style>
