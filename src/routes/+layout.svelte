<script lang="ts">
	// global styles
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	// svelte dependencies
	import { page } from '$app/stores';
	import { AppShell, AppBar, Divider, LightSwitch, Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	// components
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import ContactModal from "$lib/components/ContactModal.svelte";

	// handles text decoration in nav
	$: pathName = $page.url.pathname;
    $: pageName = pathName.substring(pathName.lastIndexOf('/') + 1);
    $: pageTitle = pageName.length > 0 ? pageName : "home";
	let navClasses = 'underline active';

	// handles modal
	function triggerModal(): void {
		const modalComponent: ModalComponent = {
			ref: ContactModal
		};
		console.log(modalComponent);
		const d: ModalSettings = {
			type: 'component',
			component: modalComponent
		};
		modalStore.trigger(d);
	}

</script>

<AppShell>
    <svelte:fragment slot="header">
		<AppBar slotLead="flex">
			<div class="flex justify-start items-center">
				<img class="mr-4" src="logo.svg" height="15%" width="15%" alt="ecommerce template logo" />
				<div class="flex flex-col justify-center">
					<h1 class="title font-bold">ecommerce</h1>
					<p class="tagline text-left">made <span class="text-amber-500">simple</span>.</p>
				</div>
				
			</div>

			<svelte:fragment slot="trail">
				<nav class="list-nav">
					<ul class="flex justify-center items-center">
						<li>
							<a href="/">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'home' ? navClasses : ''}">Home</span>
							</a>
						</li>
						<li>
							<a href="/about">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'about' ? navClasses : ''}">About</span>
							</a>
						</li>
						<li>
							<a href="/services">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'services' ? navClasses : ''}">Services</span>
							</a>
						</li>
						<li>
							<a href="/products">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'products' ? navClasses : ''}">Products</span>
							</a>
						</li>
					</ul>
				</nav>
				<Divider vertical={true} borderWidth="border-l" />
				<button class="btn bg-accent-500 btn-base text-white" on:click="{() => triggerModal()}">Contact</button>
				<Divider vertical={true} borderWidth="border-l" />
				<LightSwitch />
				<Divider vertical={true} borderWidth="border-l" />
				<a class="btn bg-primary-500 btn-base text-white" href="/signIn">Sign In</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

    <slot />
	<AnimatedBackground/>
	<Modal background={'bg-surface-100-800-token'} padding={'p-12'} buttonPositive={'bg-amber-500'} regionFooter={'flex-start'}/>

	<svelte:fragment slot="pageFooter">
		<footer class="bg-surface-100-800-token flex flex-col p-4">

			<div class="grid grid-cols-4 grid-rows-1 gap-4">
				<div class="col-span-2 flex flex-col justify-between content-center">
					<img class="mx-auto" src="building_blocks.svg" height="20%" width="20%" alt="ecommerce template logo" />
				
					<pre class="text-center text-neutral-500">"Helping respectable businesses integrate themselves into the digital landscape, the easy way."</pre>

					<div>
						<ul class="flex justify-evenly content-center icons">
							<li><a class="facebook" href="/"><i class="fa fa-facebook"></i></a></li>
							<li><a class="twitter" href="/"><i class="fa fa-twitter"></i></a></li>
							<li><a class="dribbble" href="/"><i class="fa fa-dribbble"></i></a></li>
							<li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>   
						</ul>
					</div>
				</div>

				<div class="flex flex-col justify-start content-center">
					<h6 class="text-center underline underline-offset-4">Made With</h6>
					<ul class="list">
						<li><a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a></li>
						<li><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a></li>
						<li><a href="https://skeleton.dev" target="_blank" rel="noreferrer">Skeleton</a></li>
						<li><a href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a></li>
						<li><a href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase</a></li>
						<li><a href="https://github.com/javiermruelas/ecommerce-template" target="_blank" rel="noreferrer">GitHub</a></li>
					</ul>
				</div>
	  
				<div class="flex flex-col justify-start content-center">
				  <h6 class="text-center underline underline-offset-4">Quick Links</h6>
				  <ul class="list">
					<li><a href="/">About</a></li>
					<li><a href="/">Services</a></li>
					<li><a href="/">Products</a></li>
					<li><a href="/">Contact</a></li>
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
	/* nav bar */
	nav.list-nav ul li {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	nav.list-nav ul li a {
		text-underline-offset: 8px;
	}
	.active {
		animation: active 400ms ease;
	}
	@keyframes active {
		0% {
			position: relative;
			top: 3px;
		}
		100% {
			position: relative;
			top: 0;
		}
	}
	.tagline {
		animation: slide-in-left 1000ms ease-in-out;
	}
	@keyframes slide-in-left {
		0% {
			transform: translateX(-5%);
		}
		100% {
			transform: translateX(0);
		}
	}
	.title {
		animation: slide-in-right 1000ms ease-in-out;
	}
	@keyframes slide-in-right {
		0% {
			transform: translateX(5%);
		}
		100% {
			transform: translateX(0);
		}
	}

	/* footer */
	ul.list li a {
		text-align: center;
		width: 100%;
	} 
	ul.list li a:hover {
		color: #F59F0B !important;
	}
	ul.icons li a:hover {
		color: rgb(var(--color-accent-500) / var(--tw-text-opacity)) !important;
	} 
</style>