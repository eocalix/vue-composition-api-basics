<template>
	<div class="template-refs">
		<h2 ref="appTitleRef">{{ appTitle }}</h2>
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
			<input type="text" v-model="counterTitle" v-autofocus>
		</div>
	</div>
</template>

<script setup>
	//import { ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue';
	import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue';
	import { vAutofocus } from '@/directives/vAutofocus'
	
	const appTitle = 'My Amazing Counter App';

	//this.$refs.appTitleRef
	const appTitleRef = ref(null);

	onMounted(() => {
		//console.log('Do stuff related to App Title')
		//console.log(`The app title is ${ appTitleRef.value.offsetWidth } px wide!`)
	})

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

	const increaseCounter = async (amount, e) => {
		//console.log(e);
		counter.value += amount;
		/*this.$nextTick(() => {
			// Do something after the DOM has updated
		})*/

		/* nextTick(() => {
			console.log('Do something when counter has updated in the DOM')
		}) */

		await nextTick();
		console.log('Do something when counter has updated in the DOM')
		//counterData.count++;
	}

	const decreaseCounter = (amount) => {
		counter.value -= amount;
		//counterData.count--;
	}

	onMounted(() => {
		console.log('Do stuff related to Counter')
	})

	/*onBeforeMount(() => {
		console.log('onBeforeMount');
	})

	onMounted(() => {
		console.log('onMounted');
	});

	onBeforeUnmount(() => {
		console.log('onBeforeUnmount');
	});

	onUnmounted(() => {
		console.log('onUnmounted');
	});

	onActivated(() => {
		console.log('onActivated');
	});

	onDeactivated(() => {
		console.log('onDeactivated');
	});

	onBeforeUpdate(() => {
		console.log('onBeforeUpdate');
	});

	onUpdated(() => {
		console.log('onUpdated');
	});*/

	// Directives
	/*const vAutofocus = { // v-autofocus
		mounted: (el) => {
			el.focus();
		}
	}*/
	// End Directives
</script>

<style>
	.template-refs {
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