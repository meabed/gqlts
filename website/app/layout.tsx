import { Head } from 'nextra/components';

import 'nextra-theme-docs/style.css';
import './globals.css';

export const metadata = {
  title: {
    default: 'Gqlts',
    template: '%s - Gqlts',
  },
  description: 'Gqlts generates type-safe GraphQL SDKs for modern TypeScript apps in Node.js, Bun, and browsers.',
  openGraph: {
    title: 'Gqlts: type-safe GraphQL client generation',
    description:
      'Generate typed GraphQL clients with selection-derived response types, aliases, subscriptions, uploads, batching, and custom fetchers.',
  },
};

const links = [
  { href: '/', label: 'Gqlts' },
  { href: '/quick-start', label: 'Quick Start' },
  { href: '/examples', label: 'Examples' },
  { href: '/features', label: 'Features' },
  { href: '/usage/selecting-fields', label: 'Concepts' },
  { href: '/generate/cli', label: 'Generation' },
  { href: '/development', label: 'Contributing' },
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head />
      <body>
        <a className='gqlts-skip-link' href='#main-content'>
          Skip to Content
        </a>
        <header className='gqlts-nav'>
          <a className='gqlts-nav__brand' href='/'>
            Gqlts
          </a>
          <nav aria-label='Documentation'>
            {links.slice(1).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className='gqlts-nav__repo' href='https://github.com/meabed/gqlts'>
            GitHub
          </a>
        </header>
        <div id='main-content'>{children}</div>
        <footer className='gqlts-footer'>MIT {new Date().getFullYear()}</footer>
      </body>
    </html>
  );
}
