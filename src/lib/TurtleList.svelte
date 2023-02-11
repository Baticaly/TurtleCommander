<script>
	import { supabase } from "$lib/supabaseClient";
	import { turtleInfo1 } from "../routes/Dashboard.svelte";

	export let user;
	export let turtleList;

	async function addTurtle() {
		let turtleName;
		if (turtleList !== undefined) {
			turtleName = "Turtle #" + JSON.stringify(turtleList.length + 1);
		} else {
			turtleName = "Turtle #0";
		}

		let newTurtle = {
			turtlename: turtleName,
			spawned: "false",
			location: { x: 0, y: 0, z: 0 },
			owner: user.id,
		};

		const { error } = await supabase.from("turtles").insert(newTurtle);
		turtleList = [...turtleList, newTurtle];
	}
</script>

{#if turtleList !== undefined}
	{#each turtleList as turtle}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="text-2xl text-buttonTextSecondary bg-buttonBackgroundSecondary py-2.5 w-11/12 m-auto mb-2 text-center rounded-2xl hover:bg-buttonBackgroundSecondaryHover hover:cursor-pointer"
			on:click={turtleInfo1(turtle)}
		>
			{turtle.turtlename}
		</div>
	{/each}
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="text-2xl text-headline text-center mx-auto py-0.5 w-9 rounded-full bg-buttonBackground hover:bg-buttonBackgroundHover hover:cursor-pointer mb-2"
	on:click={addTurtle}
>
	+
</div>
