<script context="module">
	let turtleName;

	export function turtleInfo2(turtle) {
		turtleName = turtle.turtlename;
		turtleOwner = turtle.owner;
		turtleCreatedAt = turtle.created_at;
		turtleLocation = turtle.location;
		turtleSpawned = turtle.spawned;

		let turtleInfo = document.getElementById("turtleInfo");
		turtleInfo.classList.remove("hidden");
		turtleInfo.classList.add("flex");
	}
</script>

<script>
	function deleteTurtle() {}

	function saveTurtle() {}

	function connectToTurtle() {}
</script>

<!-- Turtle Information Tab -->
<div class="hidden flex-col h-full" id="turtleInfo">
	<div>
		<div class="text-4xl pl-6 pt-4 pb-3">Turtle #1</div>
		<div
			class="bg-usercardBackground h-0.5 w-[95%] rounded-full mx-auto mb-8"
		/>
	</div>

	<!-- Info Cards -->
	<div class="flex flex-col text-2xl h-3/4 overflow-auto mb-3">
		<div
			class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between"
		>
			<label for="turtleName">Turtle name:</label>
			<input
				class="bg-slate-200 w-3/5 rounded-xl p-3"
				id="turtleName"
				type="text"
				disabled
				value={turtleName}
			/>
		</div>
		<div
			class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between"
		>
			<label for="owner">Owner:</label>
			<input
				class="bg-slate-200 w-3/5 rounded-xl p-3"
				id="owner"
				type="text"
				disabled
			/>
		</div>
		<div
			class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between"
		>
			<label for="spawnedAt">Spawned at:</label>
			<input
				class="bg-slate-200 w-3/5 rounded-xl p-3"
				id="spawnedAt"
				type="text"
				disabled
			/>
		</div>
		<div
			class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between"
		>
			<label for="spawnedAt">Spawned at:</label>
			<input
				class="bg-slate-200 w-3/5 rounded-xl p-3"
				id="spawnedAt"
				type="text"
				disabled
			/>
		</div>
		<div
			class="flex flex-row w-[80%] mx-auto mb-3 items-center justify-between"
		>
			<label for="spawnedAt">Spawned at:</label>
			<input
				class="bg-slate-200 w-3/5 rounded-xl p-3"
				id="spawnedAt"
				type="text"
				disabled
			/>
		</div>
	</div>

	<!-- Buttons -->
	<div
		class="flex flex-row justify-between w-[80%] mx-auto mb-6 text-lg font-semibold"
	>
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
