import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { supabase } from '$lib/supabaseClient';
import { turtleConsole } from './store';

export const load = async (event) => {
    let authState = { status: false, id: 0 }
    const { session } = await getSupabase(event)
    const turtleID = event.url.searchParams.get('turtleID')

    if (session) {
        const { user } = session;

        let turtleIDList = []
        const { data } = await supabase.from('turtles').select().eq('owner', user.id);
        data.forEach(turtle => { turtleIDList.push(turtle.id) });

        if (turtleIDList.includes(Number(turtleID))) { 
            authState.status = true;
            authState.id = Number(turtleID);

            const { data } = await supabase.from("turtles").select().eq("id", authState.id);

            turtleConsole.update((currentValue) => {
                return data[0];
            });

            
        }
    }

    return { session, authState }
}