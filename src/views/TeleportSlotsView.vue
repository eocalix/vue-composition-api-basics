<template>
	<div class="modals">
		<h1>Teleport</h1>
		<button v-on:click="showModal = true">Show modal</button>
		<ModalSlots v-if="showModal">
			<template v-slot:title>My new title</template>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. 
				Porro, minus. Hic a atque excepturi nobis nihil reiciendis molestias magni. 
				Distinctio cum adipisci ea at perferendis est accusamus, architecto quis vero!
			</p>
		</ModalSlots>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import ModalSlots from '@/components/ModalSlots.vue'
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