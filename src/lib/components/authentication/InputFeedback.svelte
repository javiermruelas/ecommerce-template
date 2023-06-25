<script lang="ts">
import type { Feedback } from "$types/auth";

export let formActive: boolean;
export let feedback: Feedback;
export let field: string;
export let lastActiveField: string;
</script>
{#if formActive}
    {#if field === lastActiveField}
        {#if feedback}
            <span class="text-sm text-red-600">{feedback}</span>
        {:else}
            <span class="text-lg text-green-600">✓</span>
        {/if}
    {/if}
{/if} 
