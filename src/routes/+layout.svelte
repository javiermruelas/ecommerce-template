<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <!-- Header -->
    <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1>ecommerce</h1>
				<img src="logo.svg" height="10%" width="10%" alt="ecommerce template logo" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="https://github.com/javiermruelas/ecommerce-template" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
    <!-- Sidebar -->
    <svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/services">Services</a></li>
				<li><a href="/products">Products</a></li>
				<li><a href="/support">Support</a></li>
			</ul>
		</nav>
	</svelte:fragment>
    <!-- Page Content Slot -->
    <slot />
</AppShell>