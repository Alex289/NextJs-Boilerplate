import Navbar from '@/components/navbar';
import { Provider } from '@/components/provider';
import '@/styles/global.css';
import { Metadata, Viewport } from 'next';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL("https://next-js-boilerplate-sable.vercel.app"),
    title: {
      default: 'NextJs Boilerplate',
      template: '%s | NextJs Boilerplate',
    },
    authors: [{ name: 'NextJs Boilerplate' }],
    applicationName: 'NextJs Boilerplate',
    description: 'Nextjs boilerplate app',
    openGraph: {
      title: 'NextJs Boilerplate',
      description: 'nextjs boilerplate website with presets',
      url: process.env.NEXT_PUBLIC_VERCEL_URL,
      siteName: 'NextJs Boilerplate',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og`,
          width: 1920,
          height: 1080,
        },
      ],
      locale: 'en',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: 'NextJs Boilerplate',
      card: 'summary_large_image',
      description: 'nextjs boilerplate website with presets',
      images: [`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og`],
    },
    icons: {
      shortcut: '/static/icon/favicon.ico',
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#222222' },
  ],
  initialScale: 1,
  width: 'device-width',
  colorScheme: 'light dark',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body className="bg-gray-50 transition-colors duration-500 dark:bg-gray-800 dark:text-gray-100">
        <Provider>
          <Navbar />
          <main className="px-10">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
