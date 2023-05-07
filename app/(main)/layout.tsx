import React from "react";

import { AppHeader } from "~/components/app-header";
import { getCurrentUser } from "~/lib/session";

interface HomeLayoutProps {
	children: React.ReactNode;
}

export default async function HomeLayout({
	children,
}: HomeLayoutProps) {
	return (
		<>
			<AppHeader />
			<div className="mt-12 grid h-[calc(100vh_-_3rem)] grid-cols-[1fr] grid-rows-[1fr]">
				{children}
			</div>
		</>
	);
}
