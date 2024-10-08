'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { whiteLoadingSvg, blackLoadingSvg } from './shared/svg';
import { useCommonContext } from '@/app/context/common-context';
import { useSession } from "next-auth/react";
import { useTranslations } from 'next-intl';

const LoginButton = ({
                       buttonType=0
                     }) => {
  const t = useTranslations('AuthText');
  const router = useRouter();
  const {data: session, status} = useSession();

  const { userData, setUserData, showLoginModal, setShowLoginModal, showLogoutModal, setShowLogoutModal } = useCommonContext()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status === 'authenticated' && userData == null) {
      setUserData(session?.user);
    }
  }, [status, userData, session, setUserData]);

  async function login(event) {
    event.preventDefault();
    setLoading(true)
    let _userData;
    if (userData == null || Object.keys(userData).length == 0) {
      if (status == 'authenticated') {
        setUserData(session?.user)
        _userData = session?.user
      }
    } else {
      _userData = userData
    }

    if (_userData != null && Object.keys(_userData).length != 0) {
      router.refresh();
    } else {
      setShowLoginModal(true)
      setLoading(false)
    }
  }

  async function logout() {
    setShowLogoutModal(true);
  }

  return (
    <>
      {
        buttonType == 0 && (
          <>
            {
              loading ? (
                  <button className="inline-flex w-full justify-center items-center gap-x-1.5 border border-gray-500 rounded-md px-3 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-black transition-colors duration-300"
                          disabled
                  >
                    <p>{t('loginText')}</p>
                    {whiteLoadingSvg}
                  </button>
                ) :
                (
                  <button
                    className="inline-flex w-full justify-center items-center gap-x-1.5 border border-gray-500 rounded-md px-3 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-black transition-colors duration-300"
                    onClick={login}
                  >
                    {t('loginText')}
                  </button>
                )
            }
          </>
        )
      }
      {
        buttonType == 1 && (
          <>
            {
              <button
                className="my-auto mx-auto mr-4 mt-1 inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold"
                onClick={logout}
              >
                <img className="h-8 w-auto rounded-full" src={userData.image} alt='avatar' />
              </button>
            }
          </>
        )
      }
    </>
  )
}

export default LoginButton
