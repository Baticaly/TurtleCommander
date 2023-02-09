import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { supabase } from '$lib/supabaseClient';

export const load = async (event) => {
  const { session } = await getSupabase(event)
  const { user } = session;

  const { data } = await supabase.from('turtles').select().eq('owner', user.id);

  return { session, turtleList: data ?? [] }
}