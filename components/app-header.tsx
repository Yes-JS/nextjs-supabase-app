import Link from "next/link";

import { ThemeToggle } from "~/components/theme-toggle";
import { getCurrentUser } from "~/lib/session";
import { cn } from "~/lib/utils";
import { MainNav } from "~components/main-nav";
import { buttonVariants } from "~components/ui/button";
import { siteConfig } from "~config/site";

import { UserAccountNav } from "./user-account-nav";

export async function AppHeader() {
	const user = await getCurrentUser();

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						{user ? (
							<UserAccountNav
								user={{
									name: user?.name || null,
									image: user?.image || null,
								}}
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

						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
