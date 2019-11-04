<template>
	 <!-- <div id="map" ref="rootmap" ></div> -->
	 <Row style="height:100%">
		<div  id="map" style="width:1030px;height:420px;"></div>
	</Row>
</template>

<script>
	import Map from "ol/Map";
	import View from "ol/View";
	// 添加图层
	import TileLayer from "ol/layer/Tile";
	import XYZ from "ol/source/XYZ";
	import TileWMS from "ol/source/TileWMS.js";
	// 格式化地理坐标
	import { fromLonLat } from "ol/proj.js";
	import OSM from "ol/source/OSM";
	import 'ol/ol.css';
	export default { 
		data() {
			return {
			  map: null,
			  //后台服务器地址
			  urlRoot: "http://193.112.110.27:8080/geoserver/gee/wms?",
			};
		  },
		mounted() {
			this.initMap();
		},
		methods:{
		    initMap() {
			var mapcontainer = this.$refs.rootmap;
				console.log(mapcontainer)
				this.map = new Map({
				  target: "map",
				  layers: [
					new TileLayer({
					  source: new OSM()
					})
				  ],
				  view: new View({
					projection: "EPSG:4326",    
					center: [114.064839,22.548857],  //深圳
					zoom: 2
				  })
			});

		    }
		}
	}
</script>

<style scoped>
canvas {
    display: inline-block;
    height: 800px;
}
</style>
