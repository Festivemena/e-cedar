import { client } from '../../utils/sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { uuid } from 'uuidv4';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
)  {
  if (req.method === 'PUT') {
    const cart = req.body;

client.create(cart)
.then(() => {
  res.status(200).json('cart created successfully');
});
  } 
}
