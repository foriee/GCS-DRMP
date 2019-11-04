<template>
	<div class="cform">
		<form-create v-model="fApi" :rule="rule" :option="option"></form-create>
	</div>
</template>

<script>
	import formCreate from '@form-create/iview';
	import { maker } from '@form-create/iview';
	
	export default {
		 data () {
			return {
			 //实例对象
			 fApi:{},
			 //表单生成规则
			 rule:[
			   {
				  type:'input',
				  field:'goods_name',
				  title:'商品名称'
				},
				{
				  type:'datePicker',
				  field:'created_at',
				  title:'创建时间'
				}
			 ],
			 //组件参数配置
			 option:{
			   //表单提交事件
			   onSubmit:function (formData) {
				 alert(JSON.stringify(formData));
			   }
			 }
			};
		  }
	}
</script>

<style>
</style>
