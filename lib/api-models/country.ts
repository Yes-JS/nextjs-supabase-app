import { Prisma } from '@prisma/client';

import { countryPropSelect } from './countryProp';

export const countrySelect = {
	select: {
		id: true,
		name: true,
		alpha2code: true,
		alpha3code: true,
		numericCode: true,
		domains: true,
		callingCode: true,
		capital: true,
		population: true,
		area: true,
		govLink: true,
		props: countryPropSelect,
		currency: {
			select: {
				code: true,
				name: true,
				id: true,
				symbol: true,
			},
		},
	},
};

export type CountryEntity = Prisma.CountryGetPayload<
	typeof countrySelect
>;
