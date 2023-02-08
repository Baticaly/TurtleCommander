<script>
  import { page } from "$app/stores";
  import Dashboard from "./Dashboard.svelte";
  import LandingPage from "./LandingPage.svelte";
</script>

<svelte:head>
  <title>TurtleCommander</title>
  <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
  <LandingPage />
{:else}
  <Dashboard session={$page.data.session} />
{/if}
