<template>
	<div class="method-computed-watch">
		<h2>{{ appTitle }}</h2>
		<h3>{{ counterTitle}}:</h3>
		<div>
			<button class="btn" @click="decreaseCounter(2)">--</button>
			<button class="btn" @click="decreaseCounter(1)">-</button>
			<span class="counter">{{ counter }}</span>
			<button class="btn" @click="increaseCounter(1, $event)">+</button>
			<button class="btn" @click="increaseCounter(2)">++</button>
		</div>

		<p>This counter is {{ oddOrEven }}</p>

		<div class="edit">
			<h4>Edit counter title:</h4>
			<input type="text" v-model="counterTitle">
		</div>
	</div>
</template>

<script setup>
	import { ref, reactive, computed, watch } from 'vue';
	
	const appTitle = 'My Amazing Counter App';
	const counter = ref(0);
	const counterTitle = ref('My Counter');

	watch(() => counter.value, (newCount, oldCount) => {
		//console.log('newCount', newCount)
		if (newCount === 20) {
			alert('Way to go! You made it to 20!!')
		}
	})

	const oddOrEven = computed(() => {
		if (counter.value % 2 === 0) {
			return 'even'
		} else {
			return 'odd'
		}
	})

	const counterData = reactive({
		count: 0,
		title: 'My Counter'
	});

	const increaseCounter = (amount, e) => {
		//console.log(e);
		counter.value += amount;
		//counterData.count++;
	}

	const decreaseCounter = (amount) => {
		counter.value -= amount;
		//counterData.count--;
	}
</script>

<style>
	.method-computed-watch {
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