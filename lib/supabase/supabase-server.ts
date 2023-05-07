import { cookies, headers } from "next/headers";

import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "./db_types";

export const createServerClient = () =>
	createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});
