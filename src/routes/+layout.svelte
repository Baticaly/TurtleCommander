<script>
  import "../style.css";
  import { supabase } from "$lib/supabaseClient";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate("supabase:auth");
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap");
</style>
