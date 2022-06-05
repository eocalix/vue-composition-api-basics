<template>
  <teleport to=".modals-container">
			<div v-if="modelValue" class="modal">
				<h1>{{ props.title }}</h1>
				<!--<button @click="$emit('hideModal')">Hide modal</button>-->
				<button @click="handleButtonClick">Hide modal</button>
			</div>
		</teleport>
</template>

<script setup>
	/*
		props
	*/
	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: 'No title specified'
		}
	})

	console.log(props.title);
	
	/*
		emits
	*/
	const emit = defineEmits(['hideModal'])

	/*
		handle button click
	*/
	const handleButtonClick = () => {
		emit('hideModal')
	}

</script>

<style>
	.modal {
		background: beige;
		color: black;
		padding: 10px;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
</style>