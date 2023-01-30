import { client } from '../../utils/sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { uuid } from 'uuidv4';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'PUT') {
        const { comment, userId } = req.body;
    
        const { id }: any = req.query;
    
        const data = await client
          .patch(id)
          .setIfMissing({ comments: [] })
          .insert('after', 'comments[-1]', [
            {
              comment,
              _key: uuid(),
              postedBy: { _type: 'postedBy', _ref: userId },
            },
          ])
          .commit();
    
        res.status(200).json(data);
      }
}
