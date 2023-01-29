import type { NextApiRequest, NextApiResponse } from 'next';

import { searchPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { searchTerm }: any = req.query;

    const searchQuery = searchPostsQuery(searchTerm);

    const search = await client.fetch(searchQuery);

    res.status(200).json(search);
  }
}
