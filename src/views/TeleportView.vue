<template>
	<div class="modals">
		<h1>Teleport</h1>
		<button v-on:click="showModal = true">Show modal</button>
		<Modal v-if="showModal">
			<template v-slot:title>My new title</template>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. 
				Porro, minus. Hic a atque excepturi nobis nihil reiciendis molestias magni. 
				Distinctio cum adipisci ea at perferendis est accusamus, architecto quis vero!
			</p>
		</Modal>
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