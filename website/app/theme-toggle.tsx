'use client';

import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

type Theme = 'light' | 'dark';

const storageKey = 'gqlts-theme';

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

function getPreferredTheme(): Theme {
  const stored = window.localStorage.getItem(storageKey);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className='gqlts-theme-toggle'
      type='button'
      onClick={() => {
        setTheme(nextTheme);
        window.localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
      }}
    >
      {theme === 'dark' ? <LuSun aria-hidden='true' /> : <LuMoon aria-hidden='true' />}
    </button>
  );
}
