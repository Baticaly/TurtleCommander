<script>
	// Supabase
	let turtleList = [{ id: 'Turtle #1' }];

	function addTurtle() {
		let turtleID = 'Turtle #' + JSON.stringify(turtleList.length + 1);
		turtleList = [...turtleList, { id: turtleID }];
		console.log(turtleList);
	}
</script>

{#each turtleList as turtle}
	<div
		class="text-2xl text-buttonTextSecondary bg-buttonBackgroundSecondary py-2.5 w-11/12 m-auto mb-2 text-center rounded-2xl hover:bg-buttonBackgroundSecondaryHover hover:cursor-pointer"
	>
		{turtle.id}
	</div>
{/each}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="text-2xl text-headline text-center mx-auto py-0.5 w-9 rounded-full bg-buttonBackground hover:bg-buttonBackgroundHover hover:cursor-pointer mb-2"
	on:click={addTurtle}
>
	+
</div>
