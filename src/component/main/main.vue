<style scoped>
.MenuItem :after{
	color: #D7DDE4;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 240px;
	height: 40px;
	/* background: #5b6270; */
	border-radius: 3px;
	float: left;
	position: relative;
	top: 15px;
	left: 20px;
	color: white;
	text-align: center;
	line-height: 40px;
	font-size: 24px;
	margin-left: -20px;
	letter-spacing: 1px;
	font-family: inherit;
	font-weight: initial;
}
.layout-nav{
    width: 360px;
    margin: 0 auto;
    margin-right: 0px;
}
.ivu-layout-header {
    background: #393d49;
}
.ivu-menu-dark {
    background: #393d49;
}
.ivu-layout-footer{
		/* background: #393d49; */
	     padding: 0px; 
	    color: #393d49;
	    font-size: 14px;
	    text-align: center;
	    height: 30px;
	    line-height: 30px;
}
.Card{
	width: 280px;
}
 .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
	<Layout class="main">
		<Header>
			<Menu mode="horizontal" theme="dark" active-name="1">
				<div class="layout-logo">数据资源管理平台</div>
				<div class="layout-nav">
					<MenuItem name="1">
					   <Icon type="ios-search" />
						数据资源
					</MenuItem>
					<MenuItem name="2">
						<Icon type="md-build"></Icon>
						任务管理
					</MenuItem>
					<MenuItem name="3">
						<Icon type="ios-settings" />
						平台配置
					</MenuItem>
				</div>
			</Menu>
		</Header>
		<Layout>
			<Sider hide-trigger :style="{background: '#fff'}">
						<Menu :active-name="$route.name" theme="light" width="auto" :open-names="['1']">
							<Submenu name="1">
								<template slot="title">
									<Icon type="md-globe" />
									基础地图
								</template>
									<Submenu name="1-1">
										<template slot="title">基础影像</template>
										<MenuItem name="1-1-1">IMG_GE</MenuItem>
										<MenuItem name="1-1-2">mbtiles</MenuItem>
										<MenuItem name="1-1-3">GlobalImage</MenuItem>
									</Submenu>
									<Submenu name="1-2">
										<template slot="title">基础高程</template>
										<MenuItem name="1-2-1">**</MenuItem>
									</Submenu>
									<Submenu name="1-3">
										<template slot="title">矢量数据</template>
										<MenuItem name="1-3-1">**</MenuItem>
									</Submenu>
									<Submenu name="1-4">
										<template slot="title">时相影像</template>
										<MenuItem name="1-4-1">**</MenuItem>
									</Submenu>
			<!-- 								<MenuItem name="1-2">模型数据</MenuItem>
									<MenuItem name="1-3">倾斜摄影</MenuItem>
									<MenuItem name="1-4">街景影像</MenuItem>
									<MenuItem name="1-5">军标数据</MenuItem> -->
							</Submenu>
							<Submenu name="2">
								<template slot="title">
								   <Icon type="ios-search" />
									模型数据
								</template>
								<MenuItem name="2-1">Option 1</MenuItem>
								<MenuItem name="2-2">Option 2</MenuItem>
							</Submenu>
							<Submenu name="3">
								<template slot="title">
									<Icon type="md-build"></Icon>
									倾斜摄影
								</template>
								<MenuItem name="3-1">Option 1</MenuItem>
								<MenuItem name="3-2">Option 2</MenuItem>
							</Submenu>
							<Submenu name="4">
								<template slot="title">
									<Icon type="ios-settings" />
									街景影像
								</template>
								<MenuItem name="4-1">Option 1</MenuItem>
								<MenuItem name="4-2">Option 2</MenuItem>
							</Submenu>
							<Submenu name="5">
								<template slot="title">
									<Icon type="ios-settings" />
									Jun标数据
								</template>
								<MenuItem name="5-1">Option 1</MenuItem>
								<MenuItem name="5-2">Option 2</MenuItem>
							</Submenu>
						</Menu>
					</Sider>
			<Layout :style="{padding: '0 24px 24px'}">
				<Breadcrumb :style="{margin: '24px 0'}">
					<BreadcrumbItem>数据预览</BreadcrumbItem>
					<BreadcrumbItem>基础地图</BreadcrumbItem>
					<BreadcrumbItem>基础影像</BreadcrumbItem>
					<BreadcrumbItem>数据集</BreadcrumbItem>
					<BreadcrumbItem>编号</BreadcrumbItem>
				</Breadcrumb>
				<Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
					
						<Row style="background:#eee;padding:20px">
								<Col span="6">
									<Card :bordered="false" >
										<p slot="title" style="text-align: center;">Global Image</p>
										<Row type="flex" justify="space-around" class="code-row-bg" style="width: 180px;" >
												<Col span="11">
													<img src="../images/custom/IMG-1-small.jpg">
												</Col>
												<Col span="3" offset="10">
													<ButtonGroup vertical style="margin-top: -3px;">
														<Tooltip content="数据浏览" placement="right">
															<Button type="text" icon="md-eye"></Button>
														 </Tooltip>
														<Tooltip content="详细信息" placement="right">
															<Button @click="modal12 = true" type="text"  icon="ios-information-circle"></Button>
														 </Tooltip>
														<Tooltip content="资源列表" placement="right">
															<Button type="text"  icon="ios-list-box"></Button>
														 </Tooltip>
														<Tooltip content="区域下载" placement="right">
															<Button type="text" icon="md-cloud-download"></Button>
														 </Tooltip>
														<Tooltip content="区域删除" placement="right">
															<Button type="text" icon="md-remove-circle"></Button>
														 </Tooltip>
													</ButtonGroup>
												</Col>
										</Row>
										<!-- <Table size="small" height="200" style="width: 293px;" :show-header="false"  :columns="columns1" :data="data2"></Table> -->
										<!-- <Row type="flex" justify="space-around" class="code-row-bg" style="width: 180px;" >
												<Col span="3">
													<Button :size="small" class-name="vertical-center-modal" @click="modal12 = true" style="margin-top:5px;background-color: #eee;font-weight: bold;">详细信息</Button>
												</Col>
												<Col span="3">
													<Button  :size="small" style="margin-top:5px;background-color: #eee;font-weight: bold;">资源列表</Button>
												</Col>
										</Row> -->
									</Card>
								</Col>
								<Col span="6" offset="1">
									<Card :bordered="false">
										<p slot="title" style="text-align: center;">IMG_GE</p>
										<!-- <Table size="small" height="200" style="width: 293px;"  :show-header="false" :columns="columns1" :data="data2"></Table> -->
										<Row type="flex" justify="space-around" class="code-row-bg" style="width: 180px;" >
												<Col span="11">
													<img  style="text-align: center;" src="../images/custom/IMG-2-small.jpg">
												</Col>
												<Col span="3" offset="10">
													<ButtonGroup vertical style="margin-top: -3px;">
														<Tooltip content="数据浏览" placement="right">
															<Button type="text" icon="md-eye"></Button>
														 </Tooltip>
														<Tooltip content="详细信息" placement="right">
															<Button type="text" icon="ios-information-circle"></Button>
														 </Tooltip>
														<Tooltip content="资源列表" placement="right">
															<Button type="text" icon="ios-list-box"></Button>
														 </Tooltip>
														<Tooltip content="区域下载" placement="right">
															<Button type="text" icon="md-cloud-download"></Button>
														 </Tooltip>
														<Tooltip content="区域删除" placement="right">
															<Button type="text" icon="md-remove-circle"></Button>
														 </Tooltip>
													</ButtonGroup>
												</Col>
										</Row>
									</Card>
								</Col>
								<Col span="6" offset="1">
									<Card :bordered="false">
										<p slot="title" style="text-align: center;">新增</p>
										<!-- <Table size="small" height="200" style="width: 293px;"  :show-header="false" :columns="columns1" :data="data2"></Table> -->
										
											<img  style="padding: 3px 22px ;" src="../images/custom/insert-bt.jpg">
									</Card>
								</Col>
							</Row>
						
							<Row style="background:#eee;padding:20px">
								<div>
									<Table size="small" height="240" border  ref="selection"  stripe  :columns="columns2" :data="data2"></Table>
									<div style="margin: 10px;overflow: hidden">
											<div style="float: left;">
												<Page :total="100" :current="1" @on-change="changePage" show-sizer ></Page>
											</div>
											<div style="float: right;">
												<Button :size="small" style="font-weight: bold;">新增</Button>
												<Button :size="small" style="font-weight: bold;">下载</Button>
												<Button :size="small" style="font-weight: bold;">删除</Button>
											</div>
									</div>
								</div>
							</Row>
							<cform></cform>
				</Content>
			</Layout>
		</Layout>
		<Footer>
			中科院空天信息研究院苏州研究院
		</Footer>
	</Layout>
	<Modal v-model="modal12" draggable scrollable title="Global Image">
			<div><Table size="small" height="240" stripe  :show-header="false"  :columns="columns1" :data="data1"></Table></div>
	</Modal>
</template>
<script>
    export default {
            data () {
                return {
                    columns1: [
                        {
                            title: '参数',
                            key: 'name',
							width: 185,
							align:'center'
                        },
                        {
                            title: '值',
                            key: 'value',
							width: 300,
							align:'center',
							tooltip:true,
							type:'input'
                        }
                    ],
                    columns2: [ 
						{ 
							type: 'selection',
							width: 55,
							align: 'center'
						},
                        {
                            title: '编号',
                            key: 'id',
							width: 80,
							align:'center',
							sortable: true
                        },
                        {
                            title: '数据名称',
                            key: 'name',
							width: 150,
							align:'center',
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
                            return row.name.indexOf(value) > -1;
                        }
                        },
                        {
                            title: '创建时间',
                            key: 'createtime',
							width: 160,
							align:'center',
							sortable: true
                        },
                        {
                            title: '数据时相',
                            key: 'timestamp',
							width: 160,
							align:'center',
							sortable: true
                        },
                        {
                            title: '坐标系',
                            key: 'crs',
							width: 110,
							align:'center'
                        },
                        {
                            title: '层级范围',
                            key: 'levels',
							width: 100,
							align:'center'
                        },
                        {
                            title: '区域范围',
                            key: 'regions',
							width: 140,
							align:'center'
                        },
                        {
                            title: '操作',
                            key: 'opt',
							width: 120,
							align:'center',
							render: (h, params) => {
								return h('div', [
									h('Tooltip', {
										props: {
											content:'浏览',
											placement:'bottom-start'
										}
									},
									[h('Button', {
										props: {
											size:'small',
											type:'text',
											shape:'circle',
											icon: 'md-eye'
										}
									})
									]),
									h('Tooltip', {
										props: {
											content:'下载',
											placement:'bottom-start'
										}
									},
									[h('Button', {
										props: {
											size:'small',
											type:'text',
											shape:'circle',
											icon: 'md-cloud-download'
										}
										})
									]),
									h('Tooltip', {
										props: {
											content:'删除',
											placement:'bottom-start'
										}
									},
									[h('Button', {
										props: {
											size:'small',
											type:'text',
											shape:'circle',
											icon: 'md-remove-circle'
										}
									})
									]),,
									,
								]);
							}
                        }
                    ],
                    data1: [
                        {
                            name: '存储位置',
                            value: 'tilebase',
                            date: '2016-10-03'
                        },
                        {
                            name: '坐标系',
                            value: 'EPSG:4326',
                            date: '2016-10-03'
                        },
                        {
                            name: '层级范围',
                            value: '0-22',
                            date: '2016-10-03'
                        },
                        {
                            name: '区域范围',
                            value: '-180,-90,180,90',
                            date: '2016-10-03'
                        },
                        {
                            name: '时相区间',
                            value: '2010-01-01 00:00:00, 2020-01-01 00:00:00',
                            date: '2016-10-03'
                        },
                        {
                            name: '融合方式',
                            value: 'mergemode',
                            date: '2016-10-03'
                        }
                    ],
                    data2: [
                        {
							id:'123',
							taskid:'hfuyirwhrfueiwohuriupw',
                            name: 'GlobalImage.tif',
                            createtime: '2019-09-22 12:00:01',
                            timestamp: '2019-09-22 12:00:01',
							crs:'EPSG:4326',
							levels:'3-9',
							regions:'-180,-90,180,90',
                            date: '2016-10-03'
                        },
                        {
							id:'1',
							taskid:'hfuyirwhrfueiwohuriupw',
                            name: 'GlobalImage.tif',
                            createtime: '2019-09-22 12:00:01',
                            timestamp: '2019-09-22 12:00:01',
							crs:'EPSG:4326',
							levels:'3-9',
							regions:'-180,-90,180,90',
                            date: '2016-10-03'
                        },
                        {
							id:'2',
							taskid:'hfuyirwhrfueiwohuriupw',
                            name: 'GlobalImage.tif',
                            createtime: '2019-09-22 12:00:01',
                            timestamp: '2019-09-22 12:00:01',
							crs:'EPSG:4326',
							levels:'3-9',
							regions:'-180,-90,180,90',
                            date: '2016-10-03'
                        },
                        {
							id:'3',
							taskid:'hfuyirwhrfueiwohuriupw',
                            name: 'NG51G091014.tif',
                            createtime: '2019-09-22 12:00:01',
                            timestamp: '2019-09-22 12:00:01',
							crs:'EPSG:4326',
							levels:'3-9',
							regions:'-180,-90,180,90',
                            date: '2016-10-03'
                        }
                    ],
					modal12: false,
					modal13: false
                }
            }
        }
</script>
