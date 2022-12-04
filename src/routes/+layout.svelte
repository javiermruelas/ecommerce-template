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

<AppShell>
    <!-- Header -->
    <svelte:fragment slot="header">
		<AppBar slotLead="flex">
			<!-- <svelte:fragment slot="lead">
				
			</svelte:fragment> -->

			<div class="flex justify-start">
				<img src={logoSource} height="10%" width="10%" alt="ecommerce template logo" class="mr-4" />
				<h1 class="font-bold leading-loose">ecommerce</h1>
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
		<footer class="site-footer">
			<div class="container">
			  <div class="row">
				<div class="col-sm-12 col-md-6">
				  <h6>About</h6>
				  <p class="text-justify">Making the world a better place by selling quality products.</p>
				</div>
	  
				<div class="col-xs-6 col-md-3">
				  <h6>Made With</h6>
				  <ul class="footer-links">
					<li><a href="/">Svelte</a></li>
					<li><a href="/">SvelteKit</a></li>
					<li><a href="/">Skeleton</a></li>
					<li><a href="/">Tailwind</a></li>
					<li><a href="/">Stripe</a></li>
					<li><a href="/">Supabase</a></li>
				  </ul>
				</div>
	  
				<div class="col-xs-6 col-md-3">
				  <h6>Quick Links</h6>
				  <ul class="footer-links">
					<li><a href="/">About Us</a></li>
					<li><a href="/">Contact Us</a></li>
					<li><a href="/">Contribute</a></li>
					<li><a href="/">Privacy Policy</a></li>
					<li><a href="/">Sitemap</a></li>
				  </ul>
				</div>
			  </div>
			  <hr>
			</div>
			<div class="container">
			  <div class="row">
				<div class="col-md-8 col-sm-6 col-xs-12">
				  <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
			   <a href="#">Scanfcode</a>.
				  </p>
				</div>
	  
				<div class="col-md-4 col-sm-6 col-xs-12">
				  <ul class="social-icons">
					<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
					<li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
				  </ul>
				</div>
			  </div>
			</div>
	  	</footer>
	</svelte:fragment>
</AppShell>

<style>
	nav ul li {
		margin: 0 5px;
	}
</style>