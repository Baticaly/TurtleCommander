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

<div
	class="w-screen h-screen flex justify-center items-center bg-consoleBackground"
>
	<div
		class="absolute top-0 left-0 bg-consoleBackgroundSecondary w-auto h-24 rounded-br-3xl"
	>
		<h1 class="pl-4 pr-8 pt-2 text-consoleText text-4xl font-medium">
			{turtleInfo.turtlename}
		</h1>
		<h1 class="px-4 py-1 text-consoleText brightness-75 text-xl">
			{turtleInfo.fuel} fuel left.
		</h1>
	</div>
</div>
