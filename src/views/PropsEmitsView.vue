<template>
	<div class="modals">
		<h1>Props & Emits</h1>
		<button v-on:click="showModal = true">Show modal</button>
		<ModalPropsEmits v-model="showModal" @hideModal="showModal = false" title="My modal title (via prop)">
		</ModalPropsEmits>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import ModalPropsEmits from '@/components/ModalPropsEmits.vue'
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