<script>
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { currentTurtle } from '../store';

	export let username;
	$: selectedTurtle = $currentTurtle;

	async function saveTurtle() {
		let setTurtlename = document.getElementById('turtleName').value;
		if (setTurtlename !== '') {
			const { error } = await supabase
				.from('turtles')
				.update({ turtlename: setTurtlename })
				.eq('id', selectedTurtle.id);
			invalidateAll();
		} else {
			alert('Name cannot be empty!');
		}
	}

	async function deleteTurtle() {
		const { error } = await supabase.from('turtles').delete().eq('id', selectedTurtle.id);
		currentTurtle.update(() => {
			return {};
		});
		invalidateAll();
	}

	function connectToTurtle() {}
</script>

{#if selectedTurtle.turtlename !== undefined}
	<!-- Turtle Information Tab -->
	<div class="flex flex-col h-full" id="turtleInfo">
		<div>
			<div class="flex justify-between items-center">
				<div class="text-4xl pl-6 pt-4 pb-3">{$currentTurtle.turtlename}</div>
				<div class="pr-7 text-3xl font-semibold">#{$currentTurtle.id}</div>
			</div>

			<div class="bg-usercardBackground h-0.5 w-[95%] rounded-full mx-auto mb-8" />
		</div>

		<!-- Info Cards -->
		<div class="flex flex-col text-2xl h-3/4 overflow-auto mb-3">
			<div class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between">
				<label for="turtleName">Turtle name:</label>
				<input
					class="bg-slate-200 w-3/5 rounded-xl p-3"
					id="turtleName"
					type="text"
					value={$currentTurtle.turtlename}
				/>
			</div>
			<div class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between">
				<label for="owner">Owner:</label>
				<input
					class="bg-slate-200 w-3/5 rounded-xl p-3"
					id="owner"
					type="text"
					disabled
					value={username}
				/>
			</div>
			<div class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between">
				<label for="spawnedAt">Fuel:</label>
				<input
					class="bg-slate-200 w-3/5 rounded-xl p-3"
					id="spawnedAt"
					type="text"
					disabled
					value={$currentTurtle.fuel ?? 0}
				/>
			</div>
			<div class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between">
				<label for="spawnedAt">Spawned</label>
				<input
					class="bg-slate-200 w-3/5 rounded-xl p-3"
					id="spawnedAt"
					type="text"
					disabled
					value={$currentTurtle.spawned}
				/>
			</div>
			<div class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between">
				<label for="spawnedAt">Location:</label>
				<input
					class="bg-slate-200 w-3/5 rounded-xl p-3"
					id="spawnedAt"
					type="text"
					disabled
					value={JSON.stringify($currentTurtle.location)}
				/>
			</div>
		</div>

		<!-- Buttons -->
		<div class="flex flex-row justify-between w-[80%] mx-auto mb-6 text-lg font-semibold">
			<div>
				<button
					class="flex items-center justify-center bg-accent text-connectPrimary px-8 py-2 rounded-full"
					on:click={deleteTurtle}>Delete Turtle</button
				>
			</div>
			<div>
				<button
					class="flex items-center justify-center bg-accent text-connectPrimary px-8 py-2 rounded-full"
					on:click={saveTurtle}>Save</button
				>
			</div>
		</div>
		<div class="w-[94%] rounded-xl mx-auto mb-7">
			<button
				class="w-full h-full text-start py-3 px-5 rounded-xl text-xl font-bold bg-buttonBackground text-connectPrimary"
				on:click={connectToTurtle}>Connect</button
			>
		</div>
	</div>
{/if}
