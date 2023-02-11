import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { supabase } from '$lib/supabaseClient';
import { turtleList } from '../store';

export const load = async (event) => {
  const { session } = await getSupabase(event)

  if (session) {
    console.log(session)
    const { user } = session;
    const { data } = await supabase.from('turtles').select().eq('owner', user.id);
    turtleList.update((currentValue) => {
      return data
    })
  }

  return { session }
}