'use client';

import { ReactNode, useEffect } from "react";
import { useCommonContext } from '@/app/context/common-context';
import { usePathname } from 'next/navigation';
import Header from '@/app/[locale]/componets/shared/header';
import LoadingModal from '@/app/[locale]/componets/LoadingModal';

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { setShowLoadingModal } = useCommonContext();
  const pathname = usePathname();

  useEffect(() => {
    setShowLoadingModal(false);
  }, [pathname, setShowLoadingModal]);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 xl:px-6 pt-5 xl:pt-8">
          {children}
        </main>
      </div>
      <LoadingModal />
    </div>
  );
};

export default ClientLayout;