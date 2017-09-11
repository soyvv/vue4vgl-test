<template>
<div id="app">
	<layout-golden class="screen">
		<gl-col :closable="false">
			<gl-component title="compA">
				<h1>CompA</h1>
				<!-- <button @click="bottomSheet = !bottomSheet">Toggle</button> -->
			</gl-component>
			<gl-component title="compB">
				<h1>CompB</h1>
				<!-- <button @click="bottomSheet = !bottomSheet">Toggle</button> -->
			</gl-component>
			<!-- <gl-component v-if="bottomSheet"> -->
      <gl-component>
				<h1>Bottom</h1>
			</gl-component>
		</gl-col>
	</layout-golden>
  </div>
</template>