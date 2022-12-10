<script lang="typescript">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar, Divider, LightSwitch } from '@skeletonlabs/skeleton';
	import { loop_guard } from 'svelte/internal';

	// All of this code was used to switch the dark mode icon
	// import { onMount } from 'svelte';

	// let logoSource:string = 'logo.svg';

	// onMount(async () => {
	// 	let html = document.querySelector('html');

	// 	if (html != null) {
	// 		const htmlElement: HTMLElement = html;
	// 		const originalState = htmlElement.classList.contains('dark');
	// 		let previousState = originalState;

	// 		const darkModeObserver = new MutationObserver((mutations) => { 
	// 			mutations.forEach((mutation: any) => {
	// 				if (mutation.attributeName === 'class') {
	// 					const currentState = mutation.target.classList.contains('dark');
	// 					if (previousState !== currentState) {
	// 						logoSource = currentState ? 'logo_dark.svg' : 'logo.svg';
	// 						previousState = currentState;
	// 					}
	// 				}
	// 			});
	// 		});
	// 		darkModeObserver.observe(htmlElement, {attributes: true, childList: false});
	// 	}
	// });
</script>

<AppShell>
    <!-- Header -->
    <svelte:fragment slot="header">
		<AppBar slotLead="flex">
			<!-- <svelte:fragment slot="lead">
				
			</svelte:fragment> -->

			<div class="flex justify-start items-center">
				<img src="logo.svg" height="15%" width="15%" alt="ecommerce template logo" class="mr-4" />
				<h1 class="font-bold">ecommerce</h1>
			</div>

			<svelte:fragment slot="trail">
				<nav class="flex justify-center">
					<ul class="flex justify-start">
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/services">Services</a></li>
						<li><a href="/products">Products</a></li>
						<li><a href="/support">Support</a></li>
					</ul>
				</nav>
				<Divider vertical={true} borderWidth="border-l" />
				<button class="btn bg-accent-500 btn-sm text-white" >Contact Us</button>
				<Divider vertical={true} borderWidth="border-l" />
				<LightSwitch />
				<Divider vertical={true} borderWidth="border-l" />
				<a class="btn bg-primary-500 btn-sm text-white" href="https://github.com/javiermruelas/ecommerce-template" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

    <!-- Page Content Slot -->
    <slot />
	
	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		<footer class="bg-surface-100-800-token flex flex-col p-4">

			<div class="grid grid-cols-4 gap-4">
				<div class="col-span-2 flex flex-col justify-around content-center">
					<img class="mx-auto" src="logo.svg" height="10%" width="10%" alt="ecommerce template logo" />
					<p class="text-center">Helping respectable and professional businesses establish a digital footprint in the ecommerce landscape.</p>
					<div>
						<ul class="flex justify-evenly content-center">
							<li><a class="facebook" href="/"><i class="fa fa-facebook"></i></a></li>
							<li><a class="twitter" href="/"><i class="fa fa-twitter"></i></a></li>
							<li><a class="dribbble" href="/"><i class="fa fa-dribbble"></i></a></li>
							<li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>   
						</ul>
					</div>
				</div>

				<div class="flex flex-col justify-start content-center pl-16">
					<h6 class="text-left">Made With</h6>
					<ul class="footer-ul text-left flex flex-col justify-center">
						<li><a href="/">Svelte</a></li>
						<li><a href="/">SvelteKit</a></li>
						<li><a href="/">Skeleton</a></li>
						<li><a href="/">Tailwind</a></li>
						<li><a href="/">Stripe</a></li>
						<li><a href="/">Supabase</a></li>
					</ul>
				</div>
	  
				<div class="flex flex-col justify-start content-center pl-16">
				  <h6 class="text-left">Quick Links</h6>
				  <ul class="footer-ul text-left flex flex-col justify-center">
					<li><a href="/">About Us</a></li>
					<li><a href="/">Contact Us</a></li>
					<li><a href="/">Privacy Policy</a></li>
					<li><a href="/">Sitemap</a></li>
				  </ul>
				</div>
			</div>

			<div>
				<hr class="mb-2 mt-2" />
				<div class="flex justify-center content-center">
				  <p class="">Copyright &copy; 2022 All Rights Reserved by 
					<a href="https://linkedin.com/in/jruelas1996" target="_blank" rel="noreferrer">Javier Ruelas</a>.
				  </p>
				</div>
			</div>

	  	</footer>
	</svelte:fragment>
</AppShell>

<style>
	nav ul li {
		margin: 0 5px;
	}
	.footer-ul li {
		margin: 0 0 5px 0;
	}
</style>