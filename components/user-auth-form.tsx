"use client";

import * as React from "react";

import { signIn } from "next-auth/react";
import { Icons } from "~components/icons";
import { buttonVariants } from "~components/ui/button";
import { cn } from "~lib/utils";

interface UserAuthFormProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({
	className,
	...props
}: UserAuthFormProps) {
	const [isLoading, setIsLoading] =
		React.useState<boolean>(false);
	const [isGitHubLoading, setIsGitHubLoading] =
		React.useState<boolean>(false);

	return (
		<div className={cn("grid gap-2", className)} {...props}>
			<button
				type="button"
				className={cn(
					buttonVariants({ variant: "outline" })
				)}
				onClick={() => {
					setIsGitHubLoading(true);
					signIn("github");
				}}
				disabled={isLoading || isGitHubLoading}
			>
				{isGitHubLoading ? (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Icons.gitHub className="mr-2 h-4 w-4" />
				)}{" "}
				Github
			</button>
			<button
				type="button"
				className={cn(
					buttonVariants({ variant: "outline" })
				)}
				onClick={() => {
					setIsGitHubLoading(true);
					signIn("github");
				}}
				disabled={isLoading || isGitHubLoading}
			>
				{isGitHubLoading ? (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Icons.gitHub className="mr-2 h-4 w-4" />
				)}{" "}
				Google
			</button>
			<button
				type="button"
				className={cn(
					buttonVariants({ variant: "outline" })
				)}
				onClick={() => {
					setIsGitHubLoading(true);
					signIn("github");
				}}
				disabled={isLoading || isGitHubLoading}
			>
				{isGitHubLoading ? (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Icons.gitHub className="mr-2 h-4 w-4" />
				)}{" "}
				Facebook
			</button>
			<button
				type="button"
				className={cn(
					buttonVariants({ variant: "outline" })
				)}
				onClick={() => {
					setIsGitHubLoading(true);
					signIn("github");
				}}
				disabled={isLoading || isGitHubLoading}
			>
				{isGitHubLoading ? (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Icons.gitHub className="mr-2 h-4 w-4" />
				)}{" "}
				Apple
			</button>
		</div>
	);
}
