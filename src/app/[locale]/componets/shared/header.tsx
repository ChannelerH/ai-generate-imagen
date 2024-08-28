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

function Header ({
  locale = '',
  page = ''
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {setShowLoadingModal} = useCommonContext();
  const {userData} = useCommonContext();
  const t = useTranslations('IndexPageText');

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between lg:pb-6 pt-4 px-4">
      <h1 className="text-3xl text-white hover:text-gray-400 hover:transition-colors mb-4 xl:mb-0">
        {t('description')}
      </h1>
      <div className="flex items-center justify-center xl:justify-end gap-2 w-full xl:w-auto">
        <LoadingModal/>
        <GeneratingModal/>
        <LoginModal/>
        <LogoutModal/>
        <div className="flex items-center justify-end space-x-2 w-48">
          <LanguageSwitcher />
          <div className="w-24">
            <LoginButton buttonType={userData ? 1 : 0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;