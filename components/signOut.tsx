"use client";

import { useRouter } from "next/navigation";

import { useSupabase } from "~/lib/supabase/supabase-provider";

import { Button } from "./ui/button";

export function SignOut() {
	const { supabase, session } = useSupabase();
	const router = useRouter();

	const logOut = async () => {
		await supabase.auth.signOut();
		router.push("/");
	};

	return <Button onClick={logOut}>Sign Out</Button>;
}
