<template>
	
	<Row style="background:#F5F7F9;padding:20px;height:100%" >
	        <Col v-for="(type, i) in maptypes" span="7"  offset="1" style="padding-bottom: 20px;">
	            <Card >
	                    <div style="text-align:center">
	                        <h3 style="padding-bottom: 8px;">{{type.name}}</h3>
	                        <img  :src="type.thrumbPath">
	                    </div>
	            </Card>
	        </Col>
	    </Row>
</template>

<script>
	
    export default{
		data () {
			return {
				maptypes:[
					// {
					// 	name:'基础影像',
					// 	type:0,
					// 	thrumbPath:require('../../images/custom/IMG-small.jpg')
					// },
					// {
					// 	name:'基础高程',
					// 	type:4,
					// 	thrumbPath:require('../../images/custom/MAP-small.jpg')
					// },
					// {
					// 	name:'基础高程',
					// 	type:4,
					// 	thrumbPath:require('../../images/custom/MAP-small.jpg')
					// },
					// {
					// 	name:'基础矢量',
					// 	type:1,
					// 	thrumbPath:require('../../images/custom/MAP-small.jpg')
					// }
				]
			}
    	},
		mounted() {
			// let key = this.$store.state.bgSvcName;
			// let baseUrl = this.$store.state.accessSvcMap.get(key);
			
			let baseUrl = this.$store.state.accessSvcPath;
			this.$axios.get(baseUrl+"/maptype")
			.then((response)=>{
				console.log(response.data)
				this.maptypes = response.data;
			})
		}
    }
</script>

<style>
</style>
