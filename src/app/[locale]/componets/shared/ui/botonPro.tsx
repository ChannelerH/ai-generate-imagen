import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import PricingModal from '@/app/[locale]/componets/shared/pricingModal';

const BotonPro: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('PaymentModuleText');

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
      >
        {t('paymentButtonText')}
      </button>
      <PricingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default BotonPro;
