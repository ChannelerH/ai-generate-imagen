import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('FooterText');

  return (
    <footer className="text-gray-400 py-8 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl text-white">Magic Flux</h2>
          <p className="text-sm mt-2">© 2024 Flux.1 AI, Inc. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg text-white">Link</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/examples" className="hover:underline">Examples</a></li>
              <li><a href="/image-generator" className="hover:underline">Flux AI Image Generator</a></li>
              <li><a href="/gallery" className="hover:underline">Flux AI Image Generator Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy</a></li>
              <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;