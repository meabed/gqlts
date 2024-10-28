import { demoAppsBackendSdk } from '../src/demo-apps-backend-sdk';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main>
      <Test1 />
    </main>
  );
}

function Test1() {
  const [testResult, setTestResult] = useState<string | undefined>();
  useEffect(() => {
    const test = async () => {
      const { data, errors } = await demoAppsBackendSdk.query(
        {
          v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
        },
        { headers: { 'x-my-secret': 'Sarah Connor', 'content-type': 'application/json' } },
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
