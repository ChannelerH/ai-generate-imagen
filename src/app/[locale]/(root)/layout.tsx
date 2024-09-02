import { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';
import { NextAuthProvider } from '@/app/context/next-auth-context';
import { CommonProvider } from '@/app/context/common-context';
import { Toaster } from '@/app/[locale]/componets/shared/ui/sonner';
import Header from '@/app/[locale]/componets/shared/header';
import LoadingModal from '@/app/[locale]/componets/LoadingModal';
import Footer from '@/app/[locale]/componets/shared/footer';

async function getMessages(locale: string) {
  try {
    return (await import(`../../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    return (await import(`../../../../messages/en.json`)).default;
  }
}

const MainLayout = async ({ children, params: { locale } }: { children: ReactNode; params: { locale: string }; }) => {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <NextAuthProvider>
        <CommonProvider>
          <div>
            {/* <ClientSidebar /> */}
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
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 xl:px-6 pt-5 xl:pt-8">
                {children}
              </main>
              <Footer/> 
            </div>
            <LoadingModal />
          </div>
        </CommonProvider>
      </NextAuthProvider>
    </NextIntlClientProvider>
  );
};

export default MainLayout;