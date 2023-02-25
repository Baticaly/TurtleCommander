<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import TurtleInfo from '../lib/TurtleInfo.svelte';
	import TurtleList from '../lib/TurtleList.svelte';

	export let session;
	const { user } = session;

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

	function toUserInfo() {
		var userInfo = document.getElementById('userInfo');
		var dashboard = document.getElementById('dashboard');
		userInfo.classList.remove('hidden');
		dashboard.classList.remove('flex');
		dashboard.classList.add('hidden');
		userInfo.classList.add('flex');
	}

	function toDashboard() {
		var userInfo = document.getElementById('userInfo');
		var dashboard = document.getElementById('dashboard');
		userInfo.classList.add('hidden');
		dashboard.classList.add('flex');
		dashboard.classList.remove('hidden');
		userInfo.classList.remove('flex');
	}
</script>

<div
	class="absolute left-0 top-0 w-full h-full flex justify-center items-center flex-col text-loginCardText overflow-hidden"
>
	<!-- User info -->
	<form
		class="hidden flex-col gap-8 text-headline text-lg"
		on:submit|preventDefault={updateProfile}
		id="userInfo"
	>
		<div>
			<label for="email">Email</label>
			<input
				class="bg-usercardBackground w-full rounded-2xl border-2 border-loginCardBorder p-4 text-neutral-400"
				id="email"
				type="text"
				value={session.user.email}
				disabled
			/>
		</div>
		<div>
			<label for="username">Username</label>
			<input
				class="bg-usercardBackground w-full rounded-2xl border-2 border-loginCardBorder p-4 text-headline"
				id="username"
				type="text"
				bind:value={username}
			/>
		</div>

		<div>
			<input
				type="submit"
				class="bg-connectBackground w-full rounded-2xl border-2 border-loginCardBorder p-4 text-headline cursor-pointer hover:bg-buttonBackgroundHover"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
		<div class="flex flex-row justify-between">
			<div>
				<button
					class="flex items-center justify-center bg-accent text-connectPrimary text-base px-8 py-2 rounded-2xl"
					on:click={signOut}
					disabled={loading}>Sign Out</button
				>
			</div>
			<div>
				<button
					class="flex items-center justify-center bg-accent text-connectPrimary text-base px-8 py-2 rounded-2xl"
					on:click={toDashboard}>Close</button
				>
			</div>
		</div>
	</form>

	<!-- Dashboard -->
	<div class="flex flex-row w-11/12 h-5/6 justify-around" id="dashboard">
		<!-- Turtle List -->
		<div class="flex flex-col basis-[23%] bg-headline rounded-3xl">
			<div class="flex flex-row items-center justify-center pt-5 pb-4">
				<div class="basis-1/6">
					<img src="/assets/logo2.svg" alt="Logo2" class="transform -scale-x-100" />
				</div>
				<div class="font-extrabold text-2xl pl-3">TurtleCommander</div>
			</div>
			<div class="bg-usercardBackground h-0.5 w-11/12 rounded-full mx-auto mb-4" />
			<div class="h-[80%] overflow-auto">
				<TurtleList {user} />
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="flex flex-row top-3/4 py-4 items-center bg-loginCardBorder rounded-b-3xl mt-auto cursor-pointer"
				on:click={toUserInfo}
			>
				<div class="ml-6 h-8 w-8 rounded-full bg-headline">
					<img src="" alt="" />
				</div>
				<div class="text-headline pl-4 font-bold text-xl">{username}</div>
			</div>
		</div>

		<!-- Turtle Info -->
		<div class="basis-3/4 bg-headline rounded-3xl">
			<TurtleInfo {username} />
		</div>
	</div>
</div>
