<template>
	<div class="options-api">
		<div>
			<button class="btn" @click="decreaseCounter">-</button>
			<span class="counter">{{ counter }}</span>
			<button class="btn" @click="increaseCounter">+</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			increaseCounter() {
				this.counter++;
			},
			decreaseCounter() {
				this.counter--;
			}
		}
	}
</script>

<style>
	.options-api {
		text-align: center;
		padding: 20px;
	}

	.btn, .counter {
		font-size: 2.0em;
		margin: 10px;
		min-width: 50px;
	}
</style>