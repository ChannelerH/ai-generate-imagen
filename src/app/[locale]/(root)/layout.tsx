"use client";


import { ReactNode, useState } from "react";
import Sidebar from "@/app/[locale]/componets/shared/sidebar";

import { CommonProvider } from '@/app/context/common-context';
import { NextAuthProvider } from '@/app/context/next-auth-context';
import { Toaster } from '@/app/[locale]/componets/shared/ui/sonner';
import Header  from '@/app/[locale]/componets/shared/header';
import { NextIntlClientProvider } from 'next-intl';

const MainLayout = async ({ children, params: {locale} }: { children: ReactNode; params: {locale: string}; }) => {
  const [showMenu, setShowMenu] = useState(false);

  let messages;
  try {
    messages = (await import(`../../../../messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../../../messages/en.json`)).default;
  }

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
        <NextAuthProvider>
          <Toaster
            position='top-center'
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
          <CommonProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 xl:px-6 pt-5 xl:pt-8">
                {children}
              </main>
            </div>
          </CommonProvider>
        </NextAuthProvider>
      </NextIntlClientProvider>
    </div>
  );
};

export default MainLayout;
