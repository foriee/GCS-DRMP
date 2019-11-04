<template>
	<Row style="padding:20px;height: 100%;" >
		<Row style="padding:20px;background-color:#F5F7F9;" >
			<Carousel
			        v-model="value3"
			        :autoplay="setting.autoplay"
			        :autoplay-speed="setting.autoplaySpeed"
			        :dots="setting.dots"
			        :radius-dot="setting.radiusDot"
			        :trigger="setting.trigger"
			        :arrow="setting.arrow">
			        <CarouselItem v-for="(currentProgress, i) in currentProgresses" >
			           <Col span="2" offset="2">
			            	<Card dis-hover style="height:100px;width:200px;background-color: #F5F7F9;"  :bordered="false">
			            		<div style="text-align:center;">
			            			<h2 style="line-height: 100px;">{{optvalue}} {{currentProgress.name}}</h2>
			            		</div>
			            	</Card>
			            </Col>
			           <Col v-for="(progress, m) in currentProgress.progresses"  span="4"  offset="3"  style="padding-bottom: 20px;">
			            	<Circle :size="100" :stroke-width="8" :percent="progress" stroke-color="#B0C4DE">
			            		<Icon type="ios-checkmark" size="80"  style="color:#8198b1"></Icon>
			            	</Circle>
			            </Col>
			        </CarouselItem>
			    </Carousel>
	       
	 </Row>
	
	<Table size="small"  border  ref="selection"   :row-class-name="rowClassName"  :columns="columns" :data="nowData"></Table>
	<div style="padding: 10px 0px;overflow: hidden">
		  <div style="float: left;">
			  <Page :total="dataCount" :page-size="pageSize" @on-page-size-change="_nowPageSize" @on-change="changePage" show-sizer ></Page>
		  </div>
		  <div style="float: right;">
			<Tooltip  content='置顶当前任务' placement='bottom-start'>
				<i-switch v-model="is" size="large" >
					<span slot="open">开</span>
					<span slot="close">关</span>
				 </i-switch>
			 </Tooltip>
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
		value3: 0,
		currentProgresses:[],
		optvalue:'',
		setting: {
			autoplay: true,
			autoplaySpeed: 2000,
			dots: 'inside',
			radiusDot: false,
			trigger: 'click',
			arrow: 'hover'
		},
      columns: [
        {
          type: 'selection',
          width: 55,
          align: 'center',
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
          width: 210,
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
          title: '上传进度',
          key: 'percent',
          width: 490,
          align: 'center',
          sortable: true,
		  render: (h, params) => {
		    return h('Progress', {
		        props: {
					"percent": params.row.percent,
					"stroke-color":'#5F9EA0',
					"stroke-width": "20"
		        },
		      })
		  } 
        },
        {
          title: '操作',
          key: 'opt',
          width: 137,
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
                  icon: 'md-eye'
                }
              })
              ]),
              h('Tooltip', {
                props: {
                  content: '暂停',
                  placement: 'bottom-start'
                }
              },
              [h('Button', {
                props: {
                  size: 'small',
                  type: 'text',
                  shape: 'circle',
                  icon: 'md-pause'
                }
              })
              ]),
              h('Tooltip', {
                props: {
                  content: '重做',
                  placement: 'bottom-start'
                }
              },
              [h('Button', {
                props: {
                  size: 'small',
                  type: 'text',
                  shape: 'circle',
                  icon: 'ios-redo'
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
      modal12: false,
      modal13: false
    }
  },
 mounted() {
	this.$store.commit('setBgOptName',{bgOptName:'progress'});
	this.refreshTable();
	 this.timer_ = setInterval(() =>{
	      this.refreshTable()
	},5000)
	
 },
  methods:{
	  refreshTable(){
		  this.optvalue = this.$route.params.optvalue;
		  let key = this.$store.state.bgSvcName;
		  let baseUrl = this.$store.state.accessSvcMap.get(key);
		  let svc = this.$route.params.svc;
		  let optvalue = this.$route.params.optvalue;
		  let currentP = [];
		  let currentS = [];
		  this.$axios.get(baseUrl+"/taskmg/"+optvalue)
		  .then((response)=>{
		  	this.data = response.data;
		  	this.dataCount = this.data.length;
		  	//循环展示页面刚加载时需要的数据条数
		  	this.nowData = [];
		  	for (let i = 0; i < this.pageSize; i++) {
		  	  this.nowData.push(this.data[i]);
		  	}
			
			var idx = 0;
			for (let i = 0; i < this.data.length; i++) {
				if(this.data[i].percent>80){
					this.currentProgresses[idx] = {
						name:this.data[i].name,
						progresses:this.data[i].progresses
					}; 
					idx++;
				}
			}
			this.$forceUpdate();
			console.log("currentProgress: "+this.currentProgresses);
		  });
		  
	  },
	  rowClassName (row, index) {
		  if (row.percent>90) {
			  return 'demo-table-info-row';
		  } 
		  return '';
	  },
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
	}
        
    }
</script>

<style>
	 .ivu-table .demo-table-info-row td{
	        background-color: #CDC9C9;
	        /* color: #fff; */
	    }
	.ivu-switch-checked{
		border-color: #8198b1;
		background-color: #8198b1;
	}
	.ivu-page-item{
		height: 24px;
		line-height: 24px;
		min-width: 24px;
	}
</style>
