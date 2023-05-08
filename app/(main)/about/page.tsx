import React from "react";

import { getCurrentUser } from "~lib/session";

export default async function HomePage() {
	const user = await getCurrentUser();

	return (
		<div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
			<h1 className="font-display mx-auto inline  max-w-4xl bg-gradient-to-r from-secondary-foreground via-blue-600 to-secondary-foreground bg-clip-text text-5xl font-medium tracking-tight text-transparent sm:text-7xl">
				Protected route
			</h1>
		</div>
	);
}
