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
	const baseClasses = '';
	const formClasses = 'rounded-container-token';
	console.log(parent);
</script>

<div class="{baseClasses}">
    <!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<header class="mb-2">
		{#if parent.slot}
        	<slot></slot>
    	{/if}
		<h1 class="text-amber-500 mb-2">Contact</h1>
		<p>
			If you're ready to take the next step 
			in setting up an ecommerce store for 
			your business, I'd be happy to help you!
		</p>
	</header>
    <form class="{formClasses}">
		<div class="mb-4">
			<label for="name" class="block mb-2 text-sm font-medium dark:text-white">Name</label>
			<input type="text" id="name" bind:value={formData.name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
		</div>
		<div class="mb-4">
			<label for="phone-number" class="block mb-2 text-sm font-medium dark:text-white">Phone Number</label>
			<input type="tel" id="phone-number" bind:value={formData.tel} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
		</div>
		<div class="mb-4">
			<label for="email" class="block mb-2 text-sm font-medium dark:text-white">Email</label>
			<input type="email" id="email" bind:value={formData.email} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
		</div>
		<div class="mb-4">
			<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
			<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-surface-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a question, comment or concern..."></textarea>
		</div>
	  	<footer class="mb-4 {parent.regionFooter}">
        	<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        	<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit</button>
		</footer>
    </form>
    <hr />
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="/privacyPolicy" class="font-medium text-amber-500 hover:underline">Privacy Policy</a>.</p>
</div>

<style>
  input,textarea {
    outline-color: #F59F0B !important;
  }
</style>