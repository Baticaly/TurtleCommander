<script>
	import { supabase } from "$lib/supabaseClient";
	import { turtleConsole } from "./store";

	// export let pageData;

	$: turtleInfo = $turtleConsole;

	supabase
		.channel("any")
		.on(
			"postgres_changes",
			{ event: "UPDATE", schema: "public", table: "turtles" },
			(payload) => {
				console.log("Change received!", payload);
			}
		)
		.subscribe();
</script>

<div class="w-screen h-screen bg-consoleBackground">
	<div
		class="absolute top-0 left-0 bg-consoleBackgroundSecondary w-auto h-24 rounded-br-3xl"
	>
		<h1 class="pl-4 pr-8 pt-2 text-consoleText text-4xl font-medium">
			{turtleInfo.turtlename}
		</h1>
		<h1 class="px-4 py-1.5 text-consoleText brightness-75 text-xl">
			{turtleInfo.fuel} fuel left.
		</h1>
	</div>
	<div class="absolute bottom-10 left-10">
		<div
			class="bg-neutral-500 w-64 h-64 grid grid-cols-4 grid-rows-4 border-2 border-neutral-900"
		>
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
			<div class="h-full w-full border-2 border-neutral-900" />
		</div>
	</div>
	<div class="absolute bottom-0 w-screen flex justify-center">
		<div
			class="h-20 bg-consoleText flex justify-center items-center px-3 rounded-t-xl"
		>
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
			<div class="bg-buttonBackground w-12 h-12 rounded-lg mx-1.5" />
		</div>
	</div>
	<div
		class="absolute bottom-12 right-24 h-20 w-20 bg-neutral-500 border-4 border-buttonBackground"
	/>
</div>
