import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
);

export const getImage = (path: string): string|null => {
  const { publicURL } = supabase
    .storage
    .from('af-img')
    .getPublicUrl(path);

  return publicURL;
};
