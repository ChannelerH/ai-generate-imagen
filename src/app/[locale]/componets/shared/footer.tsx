'use client'

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const t = useTranslations('FooterText');
  const pathname = usePathname();
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const storedLocale = localStorage.getItem('preferredLocale');
    setLocale(storedLocale || 'en');
  });

  return (
    <footer className="text-gray-400 py-8 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl text-white">Magic Flux</h2>
          <p className="text-sm mt-2">© 2024 Magic Flux. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div>
            <h3 className="text-lg text-white">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href={`/${locale}/privacy-policy`}>{t('privacyPolicy')}</Link></li>
              <li><Link href={`/${locale}/terms-conditions`}>{t('termsAndconditions')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;