import { demoAppBackendSdk } from '../src/demo-app-backend-sdk';

export default function Home({ testResult }: { testResult: string }) {
  return (
    <>
      <main>
        <div id='test1-result'>{testResult}</div>;
      </main>
    </>
  );
}
Home.getInitialProps = async () => {
  const { data, errors } = await demoAppBackendSdk.query(
    {
      v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
    },
    { headers: { 'x-my-secret': 'Sarah Connor', 'content-type': 'application/json' } }
  );
  const message = errors ? JSON.stringify(errors) : data?.v1SatHello?.message;
  return { testResult: message };
};
