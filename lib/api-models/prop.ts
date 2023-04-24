import { Prisma } from '@prisma/client';

export const propSelect = {
	select: {
		id: true,
		title: true,
		description: true,
		units: true,
		categoryId: true,
	},
};

export type PropEntity = Prisma.PropGetPayload<
	typeof propSelect
>;
