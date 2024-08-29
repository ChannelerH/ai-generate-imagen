import { useTranslations } from 'next-intl';
import Image from "next/image";
import { RiRocketLine } from "react-icons/ri";

export const SidebarRight = () => {
  const t = useTranslations('ImageModuleText');

  return (
    <div className="bg-graylight xl:p-6 p-4 sm:px-20 pt-10">
      <div className="pt-10">
        <p id="message" className="pb-2">
          {t('inputDescriptionText')}
        </p>
        <textarea
          name="message"
          id="message"
          placeholder={t('placeholderText')}
          className="bg-white/10 border-none bg-graylight ring-1 ring-gray-500 text-white rounded px-2 pt-2 h-10 w-full appearance-none focus:outline-none resize-none"
        ></textarea>
      </div>
      <div className="pt-2">
        <div className="pt-2">
          <p className="pb-2">{t('imageRatioText')}</p>
          <div className="flex items-end gap-4">
            <span className="border border-gray-500 rounded w-12 h-14 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              2:3
            </span>
            <span className="border border-gray-500 rounded w-12 h-12 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              1:1
            </span>
            <span className="border border-gray-500 rounded w-16 h-12 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              16:9
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="py-2">{t('imageNumberText')}</p>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className="border border-gray-500 px-4 py-2 rounded bg-white/10 hover:border-primary text-white">
              {num}
            </span>
          ))}
        </div>
      </div>
      <div className="lg:pt-20 pt-10 pb-6">
        <button
          type="submit"
          className="bg-primary py-2 px-6 rounded-full w-full text-white hover:bg-transparent hover:ring-1 hover:ring-white flex gap-4 items-center justify-center"
        >
          <span>
            <RiRocketLine size={25} />
          </span>
          {t('generateButtonText')}
        </button>
      </div>
    </div>
  );
};
