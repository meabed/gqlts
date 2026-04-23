import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  title: {
    default: 'Gqlts',
    template: '%s - Gqlts',
  },
  description: 'Gqlts: Type safe graphql query builder',
  openGraph: {
    title: 'Gqlts: Type safe graphql query builder',
    description: 'Gqlts: Type safe graphql query builder',
  },
};

const navbar = (
  <Navbar
    logo={<span>Gqlts - Type safe graphql query builder</span>}
    projectLink="https://github.com/meabed/gqlts"
  />
);

const footer = <Footer>MIT {new Date().getFullYear()}</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/meabed/gqlts/tree/master/website/content"
          editLink="Edit this page on GitHub"
          darkMode
          footer={footer}
          navigation={{
            next: true,
            prev: true,
          }}
          sidebar={{
            defaultOpen: true,
          }}
          toc={{
            float: true,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
