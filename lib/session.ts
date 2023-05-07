import { createBrowserClient } from "./supabase/supabase-browser";
import { createServerClient } from "./supabase/supabase-server";

export async function getCurrentUser() {
	// const session = await getServerSession(authOptions);
	const supabase = createServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user;
}

export async function signOut() {
	// const session = await getServerSession(authOptions);
	const supabase = createBrowserClient();
	await supabase.auth.signOut();
}
