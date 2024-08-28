import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "./[locale]/libs/utils";
import { getTranslations } from 'next-intl/server';

const font = Figtree({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' }) as any;

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background text-gray-400/70", font.className)}>
        
        <main className="xl:pl-[15vw] pt-5 mx-2 xl:mx-6 xl:pt-8">{children}</main>
      </body>
    </html>
  );
}
