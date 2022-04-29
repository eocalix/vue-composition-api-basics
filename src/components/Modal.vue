<template>
  <teleport to=".modals-container">
			<div class="modal">
				<h1>This is a modal</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat unde pariatur cum veniam ex tempora culpa cupiditate, tempore itaque. At optio quaerat molestiae culpa nulla commodi quos iusto, autem cupiditate?</p>
				<button>Hide modal</button>
			</div>
		</teleport>
</template>

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