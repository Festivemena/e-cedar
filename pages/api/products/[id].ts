import type { NextApiRequest, NextApiResponse } from 'next';

import { productDetailQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity';
import { uuid } from 'uuidv4';

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id }:any = req.query;
    const query = productDetailQuery(id);
    
    const data = await client.fetch(query);

    res.status(200).json(data[0]);
  }
   
}
