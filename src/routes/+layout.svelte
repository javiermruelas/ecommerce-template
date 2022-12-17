<script lang="typescript">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar, Divider, LightSwitch } from '@skeletonlabs/skeleton';
	import AnimatedBackground from '../components/AnimatedBackground.svelte';

	import { page } from '$app/stores';
	// handles text decoration in nav
	$: pathName = $page.url.pathname;
    $: pageName = pathName.substring(pathName.lastIndexOf('/') + 1);
    $: pageTitle = pageName.length > 0 ? pageName : "home";

	let navClasses = 'underline active';

</script>

<AppShell>
    <!-- Header -->
    <svelte:fragment slot="header">
		<AppBar slotLead="flex">
			<div class="flex justify-start items-center">
				<div class="logo mr-4">
					<img src="logo.svg" height="100%" width="100%" alt="ecommerce template logo" />
				</div>
				<div class="flex flex-col justify-center">
					<h1 class="font-bold">ecommerce</h1>
					<p class="text-left">made <span class="text-amber-500">simple</span></p>
				</div>
				
			</div>

			<svelte:fragment slot="trail">
				<nav class="list-nav">
					<ul class="flex justify-center items-center">
						<li>
							<a href="/">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'home' ? navClasses : ''}">home</span>
							</a>
						</li>
						<li>
							<a href="/about">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'about' ? navClasses : ''}">about</span>
							</a>
						</li>
						<li>
							<a href="/services">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'services' ? navClasses : ''}">services</span>
							</a>
						</li>
						<li>
							<a href="/products">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'products' ? navClasses : ''}">products</span>
							</a>
						</li>
						<li>
							<a href="/support">
								<span class="flex-auto decoration-yellow-500 {pageTitle === 'support' ? navClasses : ''}">support</span>
							</a>
						</li>
					</ul>
				</nav>
				<Divider vertical={true} borderWidth="border-l" />
				<button class="btn bg-accent-500 btn-base text-white" >contact us</button>
				<Divider vertical={true} borderWidth="border-l" />
				<LightSwitch />
				<Divider vertical={true} borderWidth="border-l" />
				<a class="btn bg-primary-500 btn-base text-white" href="/">sign in</a>
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
					<div class="mx-auto mini-logo">
						<img  src="logo.svg" height="100%" width="100%" alt="ecommerce template logo" />
					</div>
					
					<pre class="text-center text-neutral-500">"Helping respectable businesses integrate themselves into the digital landscape, the easy way."</pre>
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
					<h6 class="text-center">made with</h6>
					<div class="footer-made-with flex flex-col justify-around">
						<a class="btn btn-xl btn-filled-accent text-white" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">sveltekit</a>
						<a class="btn btn-xl btn-filled-accent text-white" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">tailwind</a>
						<a class="btn btn-xl btn-filled-accent text-white" href="https://skeleton.dev" target="_blank" rel="noreferrer">skeleton</a>
						<a class="btn btn-xl btn-filled-accent text-white" href="https://stripe.com/" target="_blank" rel="noreferrer">stripe</a>
						<a class="btn btn-xl btn-filled-accent text-white" href="https://supabase.com/" target="_blank" rel="noreferrer">supabase</a>
						<a class="btn btn-xl btn-filled-primary text-white" href="https://github.com/" target="_blank" rel="noreferrer">github</a>
					</div>
				</div>
	  
				<div class="flex flex-col justify-start content-center">
				  <h6 class="text-center">quick links</h6>
				  <ul class="list">
					<li><span class="badge bg-accent-500">1.</span><a href="/">home</a></li>
					<li><span class="badge bg-accent-500">2.</span><a href="/">about</a></li>
					<li><span class="badge bg-accent-500">3.</span><a href="/">services</a></li>
					<li><span class="badge bg-accent-500">4.</span><a href="/">products</a></li>
					<li><span class="badge bg-accent-500">5.</span><a href="/">support</a></li>
					<li><span class="badge bg-accent-500">6.</span><a href="/">contact</a></li>
					<li><span class="badge bg-accent-500">7.</span><a href="/">privacy policy</a></li>
					<li><span class="badge bg-accent-500">8.</span><a href="/">sitemap</a></li>
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
	.logo {
		height: 15%;
		width: 15%;
	}
	nav.list-nav ul li {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	nav.list-nav ul li a {
		text-underline-offset: 8px;
	}
	.active {
		animation: active 600ms ease;
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

	/* footer */
	.mini-logo {
		width: 10%;
		height: 10%;
	}
	.footer-made-with {
		padding: 0 5%;
	}
	.footer-made-with a {
		margin: 0 0 5px 0;
	}
</style>