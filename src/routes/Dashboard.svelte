<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	export let session;

	let loading = false;
	let username = null;
	let website = null;
	let avatarUrl = null;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (data) {
				username = data.username;
				website = data.website;
				avatarUrl = data.avatar_url;
			}

			if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	async function updateProfile() {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<div
	class="absolute left-0 top-0 w-full h-full flex justify-center items-center flex-col text-loginCardText"
>
	<form class="flex flex-col gap-8 text-headline text-lg" on:submit|preventDefault={updateProfile}>
		<div>
			<label for="email">Email</label>
			<input
				class="bg-[#001e1d] w-full rounded-2xl border-2 border-loginCardBorder p-4 text-headline"
				id="email"
				type="text"
				value={session.user.email}
				disabled
			/>
		</div>
		<div>
			<label for="username">Username</label>
			<input
				class="bg-[#001e1d] w-full rounded-2xl border-2 border-loginCardBorder p-4 text-headline"
				id="username"
				type="text"
				bind:value={username}
			/>
		</div>

		<div>
			<input
				type="submit"
				class="bg-connectBackground w-full rounded-2xl border-2 border-loginCardBorder p-4 text-headline cursor-pointer hover:bg-[#f2cb99]"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>

		<div>
			<button
				class="flex items-center justify-center bg-accent text-connectPrimary text-base px-8 py-2 rounded-2xl"
				on:click={signOut}
				disabled={loading}>Sign Out</button
			>
		</div>
	</form>
</div>
