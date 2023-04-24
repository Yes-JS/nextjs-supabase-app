"use client";

import "../styles/globals.css";

import React from "react";

import { Navbar } from "~organisms";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<div className="grid h-full grid-rows-[max-content_1fr] bg-neutral-600">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
