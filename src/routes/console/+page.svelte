<script>
	import { page } from '$app/stores';
	import Console from './Console.svelte';
</script>

{#if $page.data.authState.status}
	<Console pageData={$page.data} />
{:else}
	<div class="flex w-screen h-screen justify-center items-center ">
		<div class="bg-accent rounded-2xl px-8 py-4">Not authorized</div>
	</div>
{/if}
