import { generateStaticParamsFor, importPage } from 'nextra/pages';

type PageProps = {
  params: Promise<{
    mdxPath?: string[];
  }>;
};

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  if (!params.mdxPath?.length) {
    return {
      title: {
        absolute: 'Gqlts',
      },
      description: 'Generate type-safe GraphQL SDKs for modern TypeScript apps.',
    };
  }

  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { default: MDXContent } = await importPage(params.mdxPath);

  return (
    <main className='gqlts-doc'>
      <MDXContent {...props} params={params} />
    </main>
  );
}
