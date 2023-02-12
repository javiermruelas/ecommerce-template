<script lang="ts">
import type { Feedback } from "$types/auth";

export let feedback: Feedback;
$: visited = feedback.visited === true;
</script>

{#if visited}
    {#if feedback.message}
        <span class="text-sm text-red-600">{feedback.message}</span>
    {:else}
        <span class="text-sm text-green-600">Valid!</span>
    {/if} 
{/if}
