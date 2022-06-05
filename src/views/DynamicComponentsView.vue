<template>
	<div class="modals">
		<h1>Dynamic Components</h1>
		<div>
			<label>
				Show dark modals?
				<input v-model="showDarkModals" type="checkbox" name="" id="">
			</label>
		</div>
		<!--<pre>{{ showDarkModals }}</pre>-->
		<button v-on:click="showModal = true">Show modal</button>
		<!--<ModalPropsEmits v-model="showModal" @hideModal="showModal = false" title="My modal title (via prop)"></ModalPropsEmits>-->
		<component 
			v-bind:is="showDarkModals ? ModalDynamicComponentsDark : ModalDynamicComponents" 
			v-model="showModal" 
			title="My modal title (via prop)">
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam exercitationem quas corporis natus deleniti, illo architecto earum distinctio obcaecati! Sed et accusamus saepe quo facere aspernatur deserunt laboriosam recusandae tempora.</p>
		</component>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import ModalDynamicComponents from '@/components/ModalDynamicComponents.vue'
	import ModalDynamicComponentsDark from '@/components/ModalDynamicComponentsDark.vue'
	
	/*
		modals
	*/	
	const showDarkModals = ref(false);
	const showModal = ref(false);
	

</script>

<!--<script>
import Modal from '@/components/Modal.vue'

export default {
	components: {
		Modal
	}	
}
</script>-->


<style>

</style>