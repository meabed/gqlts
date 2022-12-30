import { demoAppBackendSdk } from './demo-app-backend-sdk';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo App</title>
      </Head>
      <main>
        <Test1 />
      </main>
    </>
  );
}

function Test1() {
  const [testResult, setTestResult] = useState<string | undefined>();
  useEffect(() => {
    const test = async () => {
      const { data, errors } = await demoAppBackendSdk.query(
        {
          v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
        },
        { headers: { 'x-my-secret': 'Sarah Connor', 'content-type': 'application/json' } }
      );
      if (errors) {
        setTestResult(JSON.stringify(errors));
      } else {
        setTestResult(data?.v1SatHello?.message);
      }
    };
    test();
  }, []);

  return <div id='test1-result'>{testResult}</div>;
}
