<template>
	<Modal
	        title="Title"
	        v-model="modal9"
	        :styles="{top: '20px'}">
	    <Form ref="formItem"  :model="formItem" :label-width="120">
	    	<FormItem v-for="(ds, i) in mapdsinfo"  :label="ds.label" >
	    		<Input v-model="ds.value" placeholder=""></Input>
				<span style="font-size: 13px;">当前配置:{{ds.value}}</span>
	    	</FormItem>
	    </Form>
	</Modal>
</template>

<script>
	export default{
		data () {
			return {
				mapdsinfos:[],
			}
		},
		mounted() {
				let type = this.$route.params.laytype;
				let baseUrl = this.$store.state.accessSvcPath;
				this.$axios.get(baseUrl+"/mapdsinfo/"+type)
				.then((response)=>{
					console.log(response.data)
					this.mapdsinfo = response.data;
				})
		}
	}
</script>

<style>
</style>
