import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SERVICE_KEY ?? '';

export const hasServerSupabaseConfig = !!(supabaseUrl && supabaseServiceRoleKey);

export const supabaseServer = hasServerSupabaseConfig
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

// NOTE: Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in your environment
// for server-side access. The service role key has elevated privileges and
// should never be exposed to the browser.
