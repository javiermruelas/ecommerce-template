<script lang="typescript">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar, Divider, LightSwitch } from '@skeletonlabs/skeleton';
	import AnimatedBackground from '../components/AnimatedBackground.svelte';
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
				<nav class="list-nav">
					<ul class="flex justify-center items-center">
						<li>
							<a href="/">
								<span class="flex-auto">Home</span>
							</a>
						</li>
						<li>
							<a href="/about">
								<span class="flex-auto">About</span>
							</a>
						</li>
						<li>
							<a href="/services">
								<span class="flex-auto">Services</span>
							</a>
						</li>
						<li>
							<a href="/products">
								<span class="flex-auto">Products</span>
							</a>
						</li>
						<li>
							<a href="/support">
								<span class="flex-auto">Support</span>
							</a>
						</li>
					</ul>
				</nav>
				<Divider vertical={true} borderWidth="border-l" />
				<button class="btn bg-accent-500 btn-base text-white" >Contact Us</button>
				<Divider vertical={true} borderWidth="border-l" />
				<LightSwitch />
				<Divider vertical={true} borderWidth="border-l" />
				<a class="btn bg-primary-500 btn-base text-white" href="https://github.com/javiermruelas/ecommerce-template" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

    <!-- Page Content Slot -->
    <slot />
	<AnimatedBackground/>
	
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

				<div class="flex flex-col justify-start content-center">
					<h6 class="text-center">Made With</h6>
					<div class="footer-made-with flex flex-col justify-center">
						<a class="btn btn-filled-accent text-white" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
						<a class="btn btn-filled-accent text-white" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>
						<a class="btn btn-filled-accent text-white" href="https://skeleton.dev" target="_blank" rel="noreferrer">Skeleton</a>
						<a class="btn btn-filled-accent text-white" href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a>
						<a class="btn btn-filled-accent text-white" href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase</a>
						<a class="btn btn-filled-primary text-white" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
					</div>
				</div>
	  
				<div class="flex flex-col justify-start content-center">
				  <h6 class="text-center">Quick Links</h6>
				  <ul class="list">
					<li><span class="badge bg-accent-500">1.</span><a href="/">About Us</a></li>
					<li><span class="badge bg-accent-500">2.</span><a href="/">Contact Us</a></li>
					<li><span class="badge bg-accent-500">3.</span><a href="/">Privacy Policy</a></li>
					<li><span class="badge bg-accent-500">4.</span><a href="/">Sitemap</a></li>
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

	/* footer */
	.footer-made-with {
		padding: 0 5%;
	}
	.footer-made-with a {
		margin: 0 0 5px 0;
	}
</style>