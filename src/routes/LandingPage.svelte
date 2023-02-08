<script>
	import { supabase } from '$lib/supabaseClient';
	let closeButtonClicked = false;
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

<div class="m-0 p-10 text-center w-full h-full flex justify-around align-center">
	<div>
		<button class="absolute top-10 right-10 bg-buttonBackground text-xl rounded-full px-8 py-2"
			>Login
		</button>

		<div
			class="bg-loginCardBackground border-4 drop-shadow-lg border-loginCardBorder rounded-3xl p-8"
		>
			<form on:submit|preventDefault={handleLogin}>
				<div class="flex flex-col gap-4 items-start">
					<div>
						<input
							class="py-2 pl-4 rounded-xl text-loginCardTextSecondary placeholder-loginCardTextSecondary"
							type="email"
							placeholder="Your email"
							bind:value={email}
						/>
					</div>
					<div class="w-full">
						<input
							type="submit"
							class="bg-connectBackground text-connectPrimary py-2 pl-2 w-full rounded-xl cursor-pointer"
							value={loading ? 'Loading' : 'Login'}
							disabled={loading}
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
