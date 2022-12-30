// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { demoAppBackendSdk } from '../../src/demo-app-backend-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data, errors } = await demoAppBackendSdk.query(
    {
      v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
    },
    { headers: { 'x-my-secret': 'Sarah Connor', 'content-type': 'application/json' } }
  );

  res.status(200).json({ message: data?.v1SatHello?.message });
}
