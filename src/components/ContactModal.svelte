<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;
    
	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';
	// Form Data
	const formData = {
		name: '',
		tel: '',
		email: '',
		comments: ''
	};
	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
	// Base Classes
	const cBase = 'space-y-4';
	const cForm = 'space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

<div class="modal-example-form {cBase}">
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<header>
		{#if parent.slot}
        	<slot></slot>
    	{/if}
		<h1 class="text-amber-500 mb-4">Contact</h1>
		<p>
			If you're ready to take the next step 
			in setting up an ecommerce store for 
			your business, I'd be happy to help you!
		</p>
	</header>
	<form class="modal-form {cForm}">
		<label>
			<span>Name</span>
			<input type="text" bind:value={formData.name} placeholder="Enter name..." />
		</label>
		<label>
			<span>Phone Number</span>
			<input type="tel" bind:value={formData.tel} placeholder="Enter phone..." />
		</label>
		<label>
			<span>Email</span>
			<input type="email" bind:value={formData.email} placeholder="Enter email address..." />
		</label>
		<label>
			<span>Comments</span>
			<textarea bind:value={formData.comments} placeholder="Do you have anything questions or concerns?"></textarea>
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
</div>