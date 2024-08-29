import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "./[locale]/libs/utils";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '../middleware';

const font = Figtree({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Metadata' }) as {
    (key: 'title' | 'description'): string;
  };

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) locale = 'en';
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={cn("bg-background text-gray-400/70", font.className)}>
        <main className="pt-5 mx-2 xl:mx-6 xl:pt-8">{children}</main>
      </body>
    </html>
  );
}
