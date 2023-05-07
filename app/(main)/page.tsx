import React from "react";

import { getCurrentUser } from "~lib/session";

export default async function HomePage() {
	const user = await getCurrentUser();

	return (
		<div className="flex h-24 w-3/4 place-content-center self-center justify-self-center  rounded-md	border p-2 text-slate-800">
			content
		</div>
	);
}
