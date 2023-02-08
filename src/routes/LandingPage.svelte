<script>
  import { supabase } from "$lib/supabaseClient";
  let loginButtonHover = false;
  let loading = false;
  let email;

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<!-- Container -->
<div class="m-0 p-10 w-full h-full flex">
  <!-- Login Button -->
  <div class="absolute top-10 right-10">
    <form
      on:submit|preventDefault={handleLogin}
      on:mouseenter={() => {
        loginButtonHover = true;
      }}
      on:mouseleave={() => {
        loginButtonHover = false;
      }}
    >
      <div class="flex gap-4 items-start">
        {#if loginButtonHover}
          <div>
            <input
              class="bg-loginCardBackground py-2 pl-4 rounded-xl text-loginCardText placeholder-loginCardText"
              type="email"
              placeholder="Email"
              bind:value={email}
            />
          </div>
        {/if}

        <div class="w-full">
          <input
            type="submit"
            class="bg-buttonBackground text-xl rounded-full px-8 py-2 cursor-pointer hover:bg-[#f2cb99]"
            value={loading ? "Loading" : "Login"}
            disabled={loading}
          />
        </div>
      </div>
    </form>
  </div>

  <!-- Logo -->
  <div class="flex h-14 gap-3">
    <img src="src/assets/logo1.svg" alt="" />
    <div class="flex flex-col items-start justify-center text-headline">
      <h2 class="text-xl font-bold -mb-2">ComputerCraft</h2>
      <h1 class="text-3xl font-extrabold">TurtleCommander</h1>
    </div>
  </div>

  <!-- Content -->
  <div class="flex flex-row m-28 h-48">
    <div class="flex flex-col">
      <h2>Baslik</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex temporibus
        rem quis tempore alias autem repellat quaerat dicta ullam! Voluptates,
        possimus atque aspernatur nesciunt quasi ducimus autem accusantium
        beatae dolorem.
      </p>
    </div>
    <img src="src/assets/logo2.svg" alt="" />
  </div>
</div>
