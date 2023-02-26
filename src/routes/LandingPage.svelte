<script>
	import { supabase } from "$lib/supabaseClient";
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
<div class="m-0 px-14 py-10 w-full h-screen overflow-hidden">
	<!-- Login Button -->
	<div class="absolute top-10 right-10 group">
		<form on:submit|preventDefault={handleLogin}>
			<div class="flex gap-4 items-start">
				<div>
					<input
						class="bg-loginCardBackground py-2.5 pl-4 rounded-xl text-loginCardText placeholder-loginCardText transition-all duration-300 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0"
						type="email"
						placeholder="Email"
						bind:value={email}
					/>
				</div>

				<div class="w-full">
					<input
						type="submit"
						class="bg-buttonBackground text-xl rounded-full px-8 py-2 cursor-pointer hover:bg-buttonBackgroundHover"
						value={loading ? "Loading" : "Login"}
						disabled={loading}
					/>
				</div>
			</div>
		</form>
	</div>

	<!-- Logo -->
	<div class="flex flex-row h-20 gap-3">
		<img src="/assets/logo1.svg" alt="Logo1" />
		<div class="flex flex-col items-start justify-center text-headline">
			<h2 class="text-3xl font-bold -mb-1">ComputerCraft</h2>
			<h1 class="text-5xl font-extrabold">TurtleCommander</h1>
		</div>
	</div>

	<!-- Content -->
	<div class="flex justify-between flex-row h-full px-12 -mt-8">
		<div class="flex flex-col justify-center basis-6/12">
			<h2 class="text-4xl font-bold">Spawn your turtle and get started!</h2>
			<p class="mt-4 text-xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
				facilisis euismod dui sit amet rhoncus. In laoreet quis nisi maximus
				tempor.
			</p>
			<!-- Button -->
			<div
				class="bg-buttonBackground text-buttonText text-lg rounded-full drop-shadow-xl w-48 flex justify-center py-2 font-bold mt-8 hover:bg-buttonBackgroundHover hover:cursor-pointer"
			>
				Getting Started
			</div>
		</div>
		<div class="flex justify-center p-16 basis-5/12">
			<img src="/assets/logo2.svg" alt="Logo2" />
		</div>
	</div>
</div>
