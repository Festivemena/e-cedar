// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        const doc = req.body;
   
        client.create(doc).then(() => {
          res.status(200).json('Orders Uploaded Successfully');
        });
      }
}
