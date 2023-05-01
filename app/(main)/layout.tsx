import React from "react";

import { NavigationMenuDemo } from "~components/menu";

interface HomeLayoutProps {
	children: React.ReactNode;
}

export default async function HomeLayout({
	children,
}: HomeLayoutProps) {
	return (
		<div className="grid h-screen grid-cols-[1fr] grid-rows-[1fr]">
			{children}
		</div>
	);
}
