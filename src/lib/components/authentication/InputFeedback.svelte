<script lang="ts">
import type { Feedback } from "$types/auth";

export let feedback: Feedback;
export let active: boolean;
</script>
{#if active}
    {#if feedback}
        <span class="text-sm text-red-600">{feedback}</span>
    {:else}
        <span class="text-sm text-green-600">Valid!</span>
    {/if}
{/if} 
