<template>
	<Row style="background:#F5F7F9;padding:20px;height:100%" >
			<Divider orientation="left" style="font-size: 20px;">{{bgSvcName}}配置</Divider>
	        <Col span="11"  offset="1" style="padding: 20px 20px;">
				<Form ref="formItem"  :model="formItem" :label-width="120">
					<FormItem label="访问服务地址" prop="accesspathA" >
						<Input v-model="formItem.accesspath" placeholder=""></Input>
					</FormItem>
					<Divider />
					<FormItem label="管理服务地址" prop="configpath" >
						<Input v-model="formItem.configpath" placeholder=""></Input>
					</FormItem>   
					<Divider />
					<FormItem>
						<Button type="primary" @click="handleSubmit('formItem')">保存</Button>
						<Button @click="handleReset('formItem')" style="margin-left: 8px">删除</Button>
					</FormItem>
				</Form>
	        </Col>
	    </Row>
</template>
<script>
import qs from 'qs';
import axios from 'axios';
import { globalBus } from '../../global/globalBus';
const url="http://localhost:8080/gcs"
    export default {
        data () {
            return {
                // formItem: {
                //     accesspath: "",
                //     configpath: ""
                // }
            }
        },
		// created() {
		// 	this.formItem = this.formItemG
		// },
		computed: {
			bgSvcName(){
				console.log("bgSvcName config:"+ this.$store.state.bgSvcName);
				return this.$store.state.bgSvcName
			},
		  accesspath () {
			  let amap = this.$store.state.accessSvcMap;
			return amap.get(this.$store.state.bgSvcName);
		  },
		  configpath () {
			return this.$store.state.configSvcPath
		  },
		  formItem(){
			let amap = this.$store.state.accessSvcMap;
			  return {
					accesspath:amap.get(this.$store.state.bgSvcName),
					configpath:this.$store.state.configSvcPath
			  }
		  }
		 },
		 mounted() {
		 	this.$store.commit('setBgOptName',{bgOptName:'svcconfig'});
		 },
		methods: {
			refreshMenu(){
				globalBus.$emit('refreshMenu', []);
				console.log("refreshMenu...")
			},
            handleSubmit (name) {
				// let options = {
				//   method: 'POST',
				//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
				//   data: qs.stringify(this.formItem),
				//   url,
				// };
				// axios(options);
				this.$store.commit('setAccessSvcPath', {accessSvcPath:this.formItem.accesspath});
				this.$store.commit('setConfigSvcPath', {configSvcPath:this.formItem.configpath});
				this.$store.commit('addAccessSvcMap', {key:this.$store.state.bgSvcName,value:this.formItem.accesspath});
				console.log(this.$store.state.accessSvcMap);
				this.$Message.success('Success!');
				// this.$Notice.open({
				// 	title: '提交成功',
				// 	desc: 'Here is the notification description. Here is the notification description. '
				// });
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('Success!');
                //     } else {
                //         this.$Message.error('Fail!');
                //     }
                // })
            },
            handleReset (name) {
				console.log(name);
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
.ivu-form .ivu-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-weight: bold;
    font-size: 13px;
    color: #515a6e;
    line-height: 1;
    padding: 10px 12px 10px 0;
    box-sizing: border-box;
}
.ivu-btn-primary {
    color: #fff;
    background-color: #8198b1;
    border-color: #ced5dc;
	width: 70px;
}
.ivu-btn-default{
    /* color: #fff;
    background-color: #8198b1; */
    border-color: #ced5dc;
	width: 70px;
}
</style>
