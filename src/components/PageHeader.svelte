<script lang="typescript">
    import { GradientHeading } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';

    $: pathName = $page.url.pathname;
    $: pageName = pathName.substring(pathName.lastIndexOf('/') + 1);
    $: pageTitle = pageName.length > 0 ? pageName : "homepage";
</script>

{#if pageTitle}
<div class="mx-auto flex flex-column justify-center content-center">
	<div class="drop-shadow-md bg-surface-100-800-token pb-4 px-8 rounded-b-lg">
		<GradientHeading class="mx-auto" tag="h1" direction="bg-gradient-to-br" from="from-accent-500" to="to-accent-600">
			{ pageTitle }
		</GradientHeading>
	</div>
</div>
{/if}