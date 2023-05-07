import {
	NextResponse,
	type NextRequest,
} from "next/server";

import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	const supabase = createMiddlewareSupabaseClient({
		req,
		res,
	});

	const {
		data: { session },
	} = await supabase.auth.getSession();

	// if (
	// 	!session &&
	// 	req.nextUrl.pathname.startsWith("/required-session")
	// ) {
	// 	// Auth condition not met, redirect to home page.
	// 	const redirectUrl = req.nextUrl.clone();
	// 	redirectUrl.pathname = "/";
	// 	redirectUrl.searchParams.set(
	// 		`redirectedFrom`,
	// 		req.nextUrl.pathname
	// 	);
	// 	return NextResponse.redirect(redirectUrl);
	// }

	return res;
}

// import { NextResponse } from "next/server";

// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";

// export default withAuth(
// 	async function middleware(req) {
// 		const token = await getToken({ req });
// 		const isAuth = !!token;
// 		const isAuthPage =
// 			req.nextUrl.pathname.startsWith("/login") ||
// 			req.nextUrl.pathname.startsWith("/register");

// 		if (isAuthPage) {
// 			if (isAuth) {
// 				return NextResponse.redirect(new URL("/", req.url));
// 			}

// 			return null;
// 		}

// 		if (!isAuth) {
// 			let from = req.nextUrl.pathname;
// 			if (req.nextUrl.search) {
// 				from += req.nextUrl.search;
// 			}

// 			return NextResponse.redirect(
// 				new URL(
// 					`/login?from=${encodeURIComponent(from)}`,
// 					req.url
// 				)
// 			);
// 		}
// 	},
// 	{
// 		callbacks: {
// 			async authorized() {
// 				// This is a work-around for handling redirect on auth pages.
// 				// We return true here so that the middleware function above
// 				// is always called.
// 				return true;
// 			},
// 		},
// 	}
// );

// export const config = {
// 	matcher: [
// 		"/dashboard/:path*",
// 		"/editor/:path*",
// 		"/login",
// 		"/register",
// 	],
// };
