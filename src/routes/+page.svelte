<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Supabase</h1>
	<p>In the section below there is conditional text that will show whether I am authenticated with Supabase.</p>
	<hr />
	<section class="card card-body">
		{#if !$page.data.session}
			<p>I am not logged in... :(</p>
		{:else}
			<h1>Welcome {$page.data.session.user.email}</h1>
			<p>I am logged in!</p>
		{/if}
	</section>
	<hr />
</div>
<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
</div>
<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
</div>
<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
</div>
<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
</div>
