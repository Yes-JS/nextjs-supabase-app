import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '~lib/db';
import { withMethods } from '~lib/api-middlewares/with-methods';

async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		try {
			const categories = await db.category.findMany({
				include: {
					props: true,
				},
			});

			return res.json(categories);
		} catch (error) {
			return res.status(500).end();
		}
	}
}

export default withMethods(['GET'], handler);
