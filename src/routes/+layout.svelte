<script lang="typescript">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar, Divider, LightSwitch } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let logoSource:string = 'logo.svg';

	onMount(async () => {
		// html receives 'dark' class to enable dark mode
		// we may observe these events to keep our own state
		let html = document.querySelector('html');

		if (html != null) {
			const htmlElement: HTMLElement = html;
			const originalState = htmlElement.classList.contains('dark');
			let previousState = originalState;

			const darkModeObserver = new MutationObserver((mutations) => { 
				mutations.forEach((mutation: any) => {
					if (mutation.attributeName === 'class') {
						const currentState = mutation.target.classList.contains('dark');
						if (previousState !== currentState) {
							logoSource = currentState ? 'logo_dark.svg' : 'logo.svg';
							previousState = currentState;
						}
					}
				});
			});
			darkModeObserver.observe(htmlElement, {attributes: true, childList: false});
		}
	});
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <!-- Header -->
    <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex justify-start">
					<img src={logoSource} height="10%" width="10%" alt="ecommerce template logo" class="mr-4" />
					<h1 class="font-bold leading-loose">ecommerce</h1>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<nav>
					<ul class="flex justify-end">
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/services">Services</a></li>
						<li><a href="/products">Products</a></li>
						<li><a href="/support">Support</a></li>
					</ul>
				</nav>
				<Divider vertical={true} borderWidth="border-l" />
				<LightSwitch />
				<Divider vertical={true} borderWidth="border-l" />
				<a class="btn bg-primary-500 btn-sm text-white" href="https://github.com/javiermruelas/ecommerce-template" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

    <!-- Page Content Slot -->
    <slot />
</AppShell>

<style>
	nav ul li {
		margin: 0 5px;
	}
</style>