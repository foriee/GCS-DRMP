<template>
	<Breadcrumb :style="{margin: '24px 50px'}">
		<BreadcrumbItem   v-for="(item, i) in breadCrumbList">{{item.name}}</BreadcrumbItem>
		<!-- <BreadcrumbItem  >{{currCrumbNme.name}}</BreadcrumbItem> -->
	</Breadcrumb> 
</template>
 
<script>
 
export default {
    computed: {
      breadCrumbList() { //将面包屑的数据存储在vuex状态中
		if(this.$store.state.breadCrumbList!=undefined)
			return this.$store.state.breadCrumbList.concat(this.$store.state.currCrumbNme);
		else
			return [];
      },
	  // currCrumbNme(){
		 //  return this.$store.state.currCrumbNme;
	  // }
    },
}
</script>