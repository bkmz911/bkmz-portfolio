import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import '../globals.css'; // Global styles
import LenisProvider from '@/components/LenisProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lorian Hans - Web Designer & Digital Creative',
  description: 'Portfolio of Lorian Hans, a Web Designer & Digital Creative based in France.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} font-sans`}>
      <body className="bg-[#f5f5f5] text-[#111111] antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
