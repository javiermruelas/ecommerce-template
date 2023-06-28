<script lang="ts">
	export let data
	let { supabase } = data
	$: ({ supabase } = data)
	import Authentication from '$lib/components/authentication/Authentication.svelte';
</script>

<Authentication authType="passwordRecovery"></Authentication>

