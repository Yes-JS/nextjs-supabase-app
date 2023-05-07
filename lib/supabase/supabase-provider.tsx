"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

import { useRouter } from "next/navigation";

import type {
	Session,
	SupabaseClient,
} from "@supabase/auth-helpers-nextjs";

import type { Database } from "./db_types";
import { createBrowserClient } from "./supabase-browser";

export type TypedSupabaseClient = SupabaseClient<Database>;

type MaybeSession = Session | null;

type SupabaseContext = {
	supabase: TypedSupabaseClient;
	session: MaybeSession;
};

// @ts-ignore
const Context = createContext<SupabaseContext>();

export default function SupabaseProvider({
	children,
	session,
}: {
	children: React.ReactNode;
	session: MaybeSession;
}) {
	const [supabase] = useState(() => createBrowserClient());
	const router = useRouter();

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			router.refresh();
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [router, supabase]);

	return (
		<Context.Provider value={{ supabase, session }}>
			{children}
		</Context.Provider>
	);
}

export const useSupabase = () => useContext(Context);
