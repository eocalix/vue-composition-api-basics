<template>
  <teleport to=".modals-container">
			<div class="modal">
				<h1><slot name="title"></slot></h1>
				<slot></slot>
				<!--<pre>{{ $slots.title() }}</pre>-->
				<button>Hide modal</button>
			</div>
		</teleport>
</template>

<script setup>
	//this.$slots.title()
	import { useSlots } from 'vue'

	const slots = useSlots()

	//console.log(slots.title());
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