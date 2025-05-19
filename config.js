import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// process.env.OPENAI_API_KEY = env.OPENAI_API_KEY;

// process.env.SUPABASE_API_KEY = env.SUPABASE_API_KEY;
// process.env.SUPABASE_URL = env.SUPABASE_URL;

/** Ensure the OpenAI API key is available and correctly configured */
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OpenAI API key is missing or invalid.');
}

/** OpenAI config */
// export const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true
// });

if (!process.env.OPENAI_API_KEY)
  throw new Error('OpenAI API key is missing or invalid.');
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

/** Supabase config */
const privateKey = process.env.SUPABASE_API_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_API_KEY`);
const url = process.env.SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);
export const supabase = createClient(url, privateKey);
