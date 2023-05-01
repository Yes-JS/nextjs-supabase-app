import { NextApiRequest, NextApiResponse } from "next";

import { withMethods } from "~lib/api-middlewares/with-methods";
import { db } from "~lib/db";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		try {
			const user = await db.user.findUnique({
				where: {
					id: "1",
				},
			});

			return res.json(user);
		} catch (error) {
			return res.status(500).end();
		}
	}
}

export default withMethods(["GET"], handler);
