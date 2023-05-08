import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "~components/icons";
import { buttonVariants } from "~components/ui/button";
import { UserAuthForm } from "~components/user-auth-form";
import { cn } from "~lib/utils";

export const metadata: Metadata = {
	title: "Login",
	description: "Login to your account",
};

export default function LoginPage() {
	return (
		<div className="container flex h-screen flex-col items-center justify-center">
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: "secondary" }),
					"absolute left-4 top-4 md:left-8 md:top-8"
				)}
			>
				<>
					<Icons.chevronLeft className="mr-2 h-4 w-4" />
					Back
				</>
			</Link>
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<Icons.logo className="mx-auto h-6 w-6" />
					<h1 className="text-2xl font-semibold tracking-tight">
						Welcome back
					</h1>
					<p className="text-sm text-muted-foreground">
						Sign in using your preferable option
					</p>
				</div>
				<UserAuthForm />
			</div>
		</div>
	);
}
