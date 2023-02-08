<script>
	import { supabase } from '$lib/supabaseClient';
	let loginButtonHover = false;
	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<div class="m-0 p-10 text-center w-full h-full flex justify-center align-center">
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
						value={loading ? 'Loading' : 'Login'}
						disabled={loading}
					/>
				</div>
			</div>
		</form>
	</div>
</div>
