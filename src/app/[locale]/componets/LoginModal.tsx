'use client'
import React from 'react'
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {FcGoogle} from 'react-icons/fc'
import {whiteLoadingSvg} from './shared/svg'
import {useCommonContext} from "@/app/context/common-context";
import {signInUseAuth} from "@/app/[locale]/utils/nextAuthClient";
import {useSession} from "next-auth/react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

const style = {
  loginGoogleBtn: 'inline-flex w-full justify-center items-center space-x-3 rounded-md  px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
}

const LoginModal = ({redirectPath='',}) => {
  const t = useTranslations('AuthText');
  const {data: session, status} = useSession();
  const [loadGoogle, setLoadGoogle] = useState(false)
  const {showLoginModal, setShowLoginModal} = useCommonContext();
  return (
    <Transition.Root show={showLoginModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setShowLoginModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"/>
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 border border-gray-700">
                <div>

                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3"
                                  className="text-2xl font-semibold flex justify-center items-center text-gray-200">
                    
                    <Image
                      src="/website.png"
                      alt="Website Logo"
                      width={40}  // Adjust this value as needed
                      height={40} // Adjust this value as needed
                      className="mr-3"  // Add margin to the right of the image
                    />
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">
                        {t('loginModalDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 space-y-3">
                  {
                    loadGoogle ? (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-200 bg-gray-700 hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200"
                        disabled
                      >
                        {whiteLoadingSvg}
                        <p>
                          {t('loadingText')}
                        </p>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-200 bg-gray-700 hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200"
                        onClick={async () => {
                          await signInUseAuth({
                            redirectPath: redirectPath
                          })
                          setLoadGoogle(true)
                        }}
                      >
                        <FcGoogle className='text-xl'/>
                        <p>
                          {t('loginModalButtonText')}
                        </p>
                      </button>
                    )
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default LoginModal