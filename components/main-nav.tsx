"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItem } from "~/types/nav";
import { Icons } from "~components/icons";
import { siteConfig } from "~config/site";
import { cn } from "~lib/utils";

interface MainNavProps {
	items?: NavItem[];
	userIsLoggedIn: boolean;
}

export function MainNav({
	items,
	userIsLoggedIn,
}: MainNavProps) {
	const pathname = usePathname();

	return (
		<div className="flex gap-6 md:gap-10">
			<Link
				href="/"
				className="hidden items-center space-x-2 md:flex"
			>
				<Icons.logo className="h-6 w-6" />
				<span className="hidden font-bold sm:inline-block">
					{siteConfig.name}
				</span>
			</Link>
			{items?.length ? (
				<nav className="hidden gap-6 md:flex">
					{items?.map((item, index) => {
						if (
							item.requiredAuth === true &&
							!userIsLoggedIn
						) {
							return null;
						}

						return (
							item.href && (
								<Link
									key={index}
									href={item.href}
									className={cn(
										"flex items-center text-lg font-semibold sm:text-sm",
										item.href !== pathname &&
											"text-muted-foreground",
										item.disabled &&
											"cursor-not-allowed opacity-80"
									)}
								>
									{item.title}
								</Link>
							)
						);
					})}
				</nav>
			) : null}
		</div>
	);
}
