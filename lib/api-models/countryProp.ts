import { Prisma } from '@prisma/client';

import { propSelect } from './prop';

export const countryPropSelect = {
	select: {
		value: true,
		linkToProof: true,
		prop: propSelect,
	},
};

export type CountryPropEntity =
	Prisma.CountryPropGetPayload<typeof countryPropSelect>;
