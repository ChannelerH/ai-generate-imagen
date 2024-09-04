'use client'

import Image from "next/image";
import { RiNotification2Line, RiMailLine } from "react-icons/ri";
import GeneratingModal from "../GeneratingModal";
import LoadingModal from "../LoadingModal";
import LoginButton from '../LoginButton';
import LoginModal from '../LoginModal';
import LogoutModal from "../LogoutModal";
import {useCommonContext} from '@/app/context/common-context'
import {useState} from 'react'
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Link from "next/link";

function Header ({
  locale = '',
  page = ''
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {setShowLoadingModal} = useCommonContext();
  const {userData} = useCommonContext();
  const t = useTranslations('IndexPageText');

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col xl:flex-row items-center justify-between lg:pb-6 pt-4 px-6 bg-background">
      <div className="flex items-center mb-4 xl:mb-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/website.png"
            alt="Website Logo"
            width={40}  // Adjust this value as needed
            height={40} // Adjust this value as needed
            className="mr-3"  // Add margin to the right of the image
          />
          <h1 className="text-3xl text-white hover:text-gray-400 hover:transition-colors">
            {t('brandName')}
          </h1>
        </Link>
        <h3 className="text-gray-300 hover:text-gray-400 hover:transition-colors ml-4 mt-2">
          {t('description')}
        </h3>
      </div>
      <div className="flex items-center justify-center xl:justify-end gap-2 w-full xl:w-auto">
        <LoadingModal/>
        <GeneratingModal/>
        <LoginModal/>
        <LogoutModal/>
        <div className="flex items-center justify-end space-x-2 w-48">
          <div className="w-24">
          <LanguageSwitcher />
          </div>
          <div className="w-24">
            <LoginButton buttonType={userData ? 1 : 0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;