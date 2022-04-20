<template>
	<div class="data-ref-reactive">
		<h2>{{ appTitle }}</h2>
		<h3>{{ counterData.title }}:</h3>
		<div>
			<button class="btn" @click="decreaseCounter">-</button>
			<span class="counter">{{ counterData.count }}</span>
			<button class="btn" @click="increaseCounter">+</button>
		</div>

		<div class="edit">
			<h4>Edit counter title:</h4>
			<input type="text" v-model="counterData.title">
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
	import { ref, reactive } from 'vue';
	
	const appTitle = 'My Amazing Counter App';
	const counter = ref(0);
	const counterTitle = ref('My Counter');

	const counterData = reactive({
		count: 0,
		title: 'My Counter'
	});

	const increaseCounter = () => {
		//counter.value++;
		counterData.count++;
	}

	const decreaseCounter = () => {
		//counter.value--;
		counterData.count--;
	}
</script>
<!-- End Usint new <script setup>-->
<style>
	.data-ref-reactive {
		text-align: center;
		padding: 20px;
	}

	.btn, .counter {
		font-size: 2.0em;
		margin: 10px;
		min-width: 50px;
	}

	.edit {
		margin-top: 60px;
	}
</style>