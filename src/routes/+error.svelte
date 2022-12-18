<script lang="ts">
  import { page } from '$app/stores';
</script>

{#if $page.error}
<div class="container mx-auto p-8 space-y-8">
	<h1>{$page.status}: {$page.error.message}</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
</div>
{/if}