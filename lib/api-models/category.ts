import { Prisma } from '@prisma/client';

import { propSelect } from './prop';

export const categorySelect = {
	include: {
		props: propSelect,
	},
};

export type CategoryEntity = Prisma.CategoryGetPayload<
	typeof categorySelect
>;
