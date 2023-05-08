import React from "react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { getCurrentUser } from "~lib/session";

export default async function HomePage() {
	const user = await getCurrentUser();

	return (
		<div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
			<h1 className="font-display mx-auto inline  max-w-4xl bg-gradient-to-r from-secondary-foreground via-blue-600 to-secondary-foreground bg-clip-text text-5xl font-medium tracking-tight text-transparent sm:text-7xl">
				Bootstrapping{" "}
				<span className=" whitespace-nowrap text-blue-600">
					made simple
				</span>{" "}
				for solo entrepreneurs.
			</h1>
			<p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
				Most bookkeeping software is accurate, but hard to
				use. We make the opposite trade-off, and hope you
				don’t get audited.
			</p>
			<div className="mt-10 flex justify-center gap-x-6">
				<Button>Get 6 months free</Button>
				<Button variant="outline">
					<svg
						aria-hidden="true"
						className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
					>
						<path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
					</svg>
					<span className="ml-3">Watch video</span>
				</Button>
			</div>
		</div>
	);
}
