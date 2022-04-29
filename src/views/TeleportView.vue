<template>
	<div class="modals">
		<h1>Teleport</h1>
		<button v-on:click="showModal = true">Show modal</button>
		<Modal v-if="showModal"></Modal>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import Modal from '@/components/Modal.vue'
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