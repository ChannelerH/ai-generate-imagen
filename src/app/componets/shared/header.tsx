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

function Header ({
  locale = '',
  page = ''
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {setShowLoadingModal} = useCommonContext();
  const {userData} = useCommonContext();

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between lg:pb-6 pt-4 px-4">
      <h1 className="text-3xl text-white hover:text-gray-400 hover:transition-colors mb-4 xl:mb-0 xl:ml-60">
        AI Generate Imagen
      </h1>
      <div className="flex items-center justify-center xl:justify-end gap-2 w-full xl:w-auto">
        <LoadingModal/>
        <GeneratingModal/>
        <LoginModal/>
        <LogoutModal/>
        <div className="lg:ml-2 lg:relative lg:inline-block lg:text-left">
          <LoginButton buttonType={userData ? 1 : 0} />
        </div>
      </div>
    </div>
  );
};

export default Header;