<template>
	<div class="composition-api">
		<div>
			<button class="btn" @click="decreaseCounter">-</button>
			<span class="counter">{{ counter }}</span>
			<button class="btn" @click="increaseCounter">+</button>
		</div>
	</div>
</template>
<!-- Using classic setup function-->
<!--<script>
	import { ref } from 'vue';
	export default {
		setup() {
			const counter = ref(0);

			const increaseCounter = () => {
				counter.value++;
			}

			const decreaseCounter = () => {
				counter.value--;
			}

			return {
				counter,
				increaseCounter,
				decreaseCounter,
			}
		}
	}
</script>-->
<!-- End Using classic setup function-->

<!-- Usint new <script setup>-->
<script setup>
	import { ref } from 'vue';
	
	const counter = ref(0);

	const increaseCounter = () => {
		counter.value++;
	}

	const decreaseCounter = () => {
		counter.value--;
	}
</script>
<!-- End Usint new <script setup>-->
<style>
.composition-api {
		text-align: center;
		padding: 20px;
	}

	.btn, .counter {
		font-size: 2.0em;
		margin: 10px;
		min-width: 50px;
	}
</style>