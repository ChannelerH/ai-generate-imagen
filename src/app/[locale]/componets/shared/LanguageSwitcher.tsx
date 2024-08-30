import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useCommonContext } from '@/app/context/common-context';
import { useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '/flags/en.png' },
  { code: 'zh', name: '简体中文', flag: '/flags/zh.png' },
  { code: 'tw', name: '繁體中文', flag: '/flags/zh-TW.png' },
  { code: 'ko', name: '한국어', flag: '/flags/ko.png' },
  { code: 'ja', name: '日本語', flag: '/flags/ja.png' },
  // { code: 'pt', name: 'Português', flag: '/flags/pt.png' },
  // { code: 'es', name: 'Español', flag: '/flags/es.png' },
];

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  let currentLocale;
  const [isOpen, setIsOpen] = React.useState(false);
  const { setShowLoadingModal } = useCommonContext();
  
  try {
    currentLocale = useLocale();
  } catch (error) {
    console.error('Failed to get locale:', error);
    currentLocale = 'en'; // Fallback to English
  }

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) {
      // If the new locale is the same as the current one, just close the dropdown
      setIsOpen(false);
      return;
    }
    setShowLoadingModal(true);
    const currentPath = pathname.replace(`/${currentLocale}`, '');
    router.push(`/${newLocale}${currentPath}`);
    setIsOpen(false);
  };

  useEffect(() => {
    // Reset loading state after language change
    setShowLoadingModal(false);
  }, [currentLocale, setShowLoadingModal]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left w-24" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-md border border-gray-500 px-3 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-black transition-colors duration-300"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          {currentLocale.toUpperCase()}
          <svg className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;