<template>
	<div class="cslider">
		<Sider hide-trigger :style="{background: '#fff'}">
			<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
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
	</div>
</template>

<script>
</script>

<style>
</style>
