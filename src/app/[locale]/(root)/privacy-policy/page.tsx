import React from 'react';
import { useTranslations } from 'next-intl';

const PrivacyPolicy = () => {
  const t = useTranslations('PrivacyPolicy');

  return (
    <div className="max-w-3xl mx-auto text-gray-300 pt-20">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
      <p className="mb-8">{t('effectiveDate', { date: 'September 4, 2024' })}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('overview.title')}</h2>
          <p>{t('overview.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('informationCollection.title')}</h2>
          <h3 className="text-xl font-semibold mb-3">{t('informationCollection.personalData.title')}</h3>
          <p>{t('informationCollection.personalData.content')}</p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>{t('informationCollection.personalData.name')}</li>
            <li>{t('informationCollection.personalData.email')}</li>
            <li>{t('informationCollection.personalData.paymentInfo')}</li>
          </ul>
          <p>{t('informationCollection.personalData.purpose')}</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">{t('informationCollection.nonPersonalData.title')}</h3>
          <p>{t('informationCollection.nonPersonalData.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('purposeOfDataCollection.title')}</h2>
          <p>{t('purposeOfDataCollection.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('dataSharing.title')}</h2>
          <p>{t('dataSharing.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('childrensPrivacy.title')}</h2>
          <p>{t('childrensPrivacy.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('updates.title')}</h2>
          <p>{t('updates.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('contactUs.title')}</h2>
          <p>{t('contactUs.content')}</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;