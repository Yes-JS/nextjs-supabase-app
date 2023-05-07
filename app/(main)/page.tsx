import React from "react";

import Link from "next/link";

import { SignOut } from "~/components/signOut";
import { buttonVariants } from "~/components/ui/button";
import { UserAvatar } from "~/components/user-avatar";
import { cn } from "~/lib/utils";
import { getCurrentUser } from "~lib/session";

export default async function HomePage() {
	const user = await getCurrentUser();

	console.log("user", user);
	return (
		<div className="flex h-24 w-3/4 place-content-center self-center justify-self-center  rounded-md	border p-2 text-slate-800">
			{user ? (
				<>
					<UserAvatar
						user={{
							name: user.user_metadata.name || null,
							image: user.user_metadata.avatar_url || null,
						}}
						className="h-8 w-8"
					/>
					<SignOut />
				</>
			) : (
				<Link
					href="/login"
					className={cn(
						buttonVariants({
							variant: "secondary",
							size: "sm",
						}),
						"self-center px-4"
					)}
				>
					Login
				</Link>
			)}
		</div>
	);
}
