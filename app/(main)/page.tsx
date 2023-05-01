import React from "react";

import Link from "next/link";

import { buttonVariants } from "~/components/ui/button";
import { UserAvatar } from "~/components/user-avatar";
import { cn } from "~/lib/utils";
import { getCurrentUser } from "~lib/session";

export default async function HomePage() {
	const user = await getCurrentUser();

	return (
		<div className="flex h-24 w-3/4 place-content-center self-center justify-self-center  rounded-md	border p-2 text-slate-800">
			{user ? (
				<UserAvatar
					user={{
						name: user.name || null,
						image: user.image || null,
					}}
					className="h-8 w-8"
				/>
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
