<script>
	import { invalidate, invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { currentTurtle, turtleList } from '../store';

	export let user;

	$: turtlelist = $turtleList;

	async function addTurtle() {
		let turtleName;
		if (turtlelist !== undefined) {
			turtleName = 'Turtle #' + JSON.stringify(turtlelist.length + 1);
		} else {
			turtleName = 'Turtle #0';
		}

		let newTurtle = {
			turtlename: turtleName,
			spawned: 'false',
			location: { x: 0, y: 0, z: 0 },
			owner: user.id
		};

		const { error } = await supabase.from('turtles').insert(newTurtle);
		turtleList.update((currentList) => {
			return [...currentList, newTurtle];
		});
		invalidateAll();
	}

	function selectTurtle(turtle) {
		currentTurtle.update((current) => {
			return turtle;
		});
	}
</script>

{#if turtlelist !== undefined}
	{#each turtlelist as turtle}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="text-2xl text-buttonTextSecondary bg-buttonBackgroundSecondary py-2.5 w-11/12 m-auto mb-2 text-center rounded-2xl hover:bg-buttonBackgroundSecondaryHover hover:cursor-pointer"
			on:click={selectTurtle(turtle)}
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
