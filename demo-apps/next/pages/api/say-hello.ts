// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { demoAppsBackendSdk } from '../../src/demo-apps-backend-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data, errors } = await demoAppsBackendSdk.query(
    {
      v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
    },
    { headers: { 'x-my-secret': 'Sarah Connor', 'content-type': 'application/json' } }
  );

  res.status(200).json({ message: data?.v1SatHello?.message });
}
