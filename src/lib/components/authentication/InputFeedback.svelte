<script lang="ts">
import type { Feedback } from "$types/auth";

export let feedback: Feedback;
export let active: boolean;
</script>
{#if active}
    {#if feedback}
        <span class="text-sm text-red-600">{feedback}</span>
    {:else}
        <span class="text-lg text-green-600">✓</span>
    {/if}
{/if} 
