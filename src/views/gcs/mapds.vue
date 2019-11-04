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
	<div>
		 	
			
	 <Row style="background:#F5F7F9;padding:20px;height:100%">
<!-- 		
		 <Button @click="modal9 = true" type="text"  icon="ios-information-circle"></Button>
			<Modal title="Title"
			        v-model="modal9"
			        :styles="{top: '20px'}">
			</Modal>
		 -->
		<div style="height: 50px;margin-left:-10px;margin-top: -10px;"><span style="font-size: 18px;font-weight: 600;">{{layertypename}}</span></div>
			<Col span="7"  v-for="(ds, i) in mapdss"  style="padding: 20px 20px;">
				<Card :bordered="false" v-fo>
					<p slot="title" style="text-align: center;">{{ds.name}}</p>
					<Row type="flex" justify="space-around" class="code-row-bg" style="width: 180px;" >
							<Col span="10"  offset="1">
								<img :src="ds.thrumbPath">
							</Col>
							<Col v-if="ds.layertype!=-1" span="2" offset="10">
								<ButtonGroup vertical style="margin-top: -3px;">
									<Tooltip content="数据浏览" placement="right">
										<Button type="text" icon="md-eye" :to="{path:'/datasource/preview/'+ds.name}">
										</Button>
									 </Tooltip>
									<Tooltip content="详细信息" placement="right">
										<Button @click="getMapDsInfo(ds.name)" type="text"  icon="ios-information-circle"></Button>
									 </Tooltip>
									<Tooltip content="资源列表" placement="right">
										<Button type="text"  icon="ios-list-box" :to="{path:'/datasource/layer/'+ds.name}"></Button>
									 </Tooltip>
									<Tooltip content="区域下载" placement="right">
										<Button type="text" icon="md-cloud-download" :to="{path:'/datasource/preview/'+ds.name}"></Button>
									 </Tooltip>
									<Tooltip content="区域删除" placement="right">
										<Button type="text" icon="md-remove-circle" :to="{path:'/datasource/preview/'+ds.name}"></Button>
									 </Tooltip>
								</ButtonGroup>
							</Col>
							<Col v-else span="1" >
							</Col>
					</Row>
				</Card>
			</Col>
			
			
		</Row>
		<Modal title="数据集详细信息"
			        v-model="modal9"
			        :styles="{top: '20px',width:'360px'}">
			    <Form ref="mapdsinfo"  :model="mapdsinfo" :label-width="80">
			    	<FormItem v-for="(mapds, i) in mapdsinfo"  :label="mapds.label" >
			    		<Input v-model="mapds.value" placeholder=""></Input>
			    	</FormItem>
			    </Form>
			</Modal>
	</div>
</template>
<script>
	import axios from 'axios'
    export default{
		data () {
			return {
				mapdss:[],
				mapdsinfo:[],
				modal9:false
			}
    	},
		computed: {
			layertypename() {
				switch (this.$route.params.layertype){
				case '0':
					return "基础影像";
				case '1':
					return "基础地图";
				case '2':
					return "时相影像";
				case '4':
					return "基础高程";
				default:
					return "基础影像";
				}
			}
		},
		mounted() {
			let type = this.$route.params.layertype;
			let baseUrl = this.$store.state.accessSvcPath;
				console.log("type: "+type)
			this.$axios.get(baseUrl+"/datasource/layerspace/"+type)
			.then((response)=>{
				console.log(response.data)
				this.mapdss = response.data;
			})
		},
		methods:{
			getMapDsInfo:function(name){
				console.log("getMapDsInfo:"+name);
				let baseUrl = this.$store.state.accessSvcPath;
				this.$axios.get(baseUrl+"/layerspaceInfo/"+name)
				.then((response)=>{
					console.log(response.data)
					this.mapdsinfo = response.data;
				})
				this.modal9 = true;
			}
		}
    }
</script>
