import React from 'react';
import { useTranslations } from 'next-intl';

const TermsOfService = () => {
  const t = useTranslations('TermsOfService');

  return (
    <div className="max-w-3xl mx-auto text-gray-300 pt-20">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
      <p className="mb-8">{t('effectiveDate', { date: 'April 19, 2024' })}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('introduction.title')}</h2>
          <p>{t('introduction.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('useLicense.title')}</h2>
          <p>{t('useLicense.content')}</p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>{t('useLicense.restrictions.modify')}</li>
            <li>{t('useLicense.restrictions.useCommercially')}</li>
            <li>{t('useLicense.restrictions.decompile')}</li>
            <li>{t('useLicense.restrictions.remove')}</li>
            <li>{t('useLicense.restrictions.transfer')}</li>
          </ul>
          <p>{t('useLicense.termination')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.title')}</h2>
          <p>{t('disclaimer.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('limitations.title')}</h2>
          <p>{t('limitations.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('accuracyOfMaterials.title')}</h2>
          <p>{t('accuracyOfMaterials.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('links.title')}</h2>
          <p>{t('links.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('modifications.title')}</h2>
          <p>{t('modifications.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('governingLaw.title')}</h2>
          <p>{t('governingLaw.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('contactUs.title')}</h2>
          <p>{t('contactUs.content')}</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;