// pages/api/mock/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const listJSON = [
      { 
        id: 1, 
        total: '45.65' ,
        code: 's3412123',
        image: ''
      },
    ]
    res.status(200).json(listJSON);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}