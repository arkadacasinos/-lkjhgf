import type { Metadata, Viewport } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const _manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

const _playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const SITE_URL = 'https://la15casino.vercel.app'
const SITE_TITLE = 'La Casino официальный сайт — играть онлайн, зеркало и бонусы 2026'
const SITE_DESCRIPTION =
  'La Casino официальный сайт: играть онлайн в слоты, рулетку и live-казино. Рабочее зеркало La Casino, быстрый вывод, бонусы до 150% и фриспины новым игрокам.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | La Casino',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'la casino',
    'la casino зеркало',
    'la casino играть',
    'la casino официальный',
    'la casino официальный сайт',
    'ла казино',
    'ля казино',
    'ля казино зеркало',
    'ля казино зеркало рабочее',
    'ля казино играть',
    'ля казино онлайн',
    'ля казино официальный',
    'ля казино официальный сайт',
  ],
  authors: [{ name: 'La Casino' }],
  creator: 'La Casino',
  publisher: 'La Casino',
  applicationName: 'La Casino',
  generator: 'Next.js',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ru-RU': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'La Casino',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  category: 'entertainment',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0b0a14' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0a14' },
  ],
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${_manrope.variable} ${_playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="La Casino" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0b0a14" />
        <meta name="msapplication-TileColor" content="#0b0a14" />
        <meta name="rating" content="18+" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="content-language" content="ru" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru-ru" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <link rel="icon" href="/icon-light-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon-dark-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="yandex-verification" content="cdfd416acd34fde5" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
