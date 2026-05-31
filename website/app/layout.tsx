import Link from 'next/link';
import { Head } from 'nextra/components';

import { ThemeToggle } from './theme-toggle';

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
          <div className='gqlts-nav__inner'>
            <Link className='gqlts-nav__brand' href='/'>
              Gqlts
            </Link>
            <nav aria-label='Documentation'>
              {links.slice(1).map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className='gqlts-nav__actions'>
              <a className='gqlts-nav__repo' href='https://github.com/meabed/gqlts'>
                GitHub
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div id='main-content'>{children}</div>
        <footer className='gqlts-footer'>
          <p>Gqlts is MIT licensed.</p>
          <nav aria-label='Footer'>
            <Link href='/quick-start'>Quick Start</Link>
            <Link href='/generate/cli'>CLI</Link>
            <Link href='/usage/selecting-fields'>Concepts</Link>
            <a href='https://github.com/meabed/gqlts'>GitHub</a>
          </nav>
          <small>Copyright {new Date().getFullYear()} Gqlts contributors.</small>
        </footer>
      </body>
    </html>
  );
}
