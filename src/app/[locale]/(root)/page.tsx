"use client";

import { useState } from 'react';
import { Galeria } from "../componets/shared/galeria";
import { SidebarRight } from "../componets/shared/sidebarRight";

export interface ImageInfo {
  url: string;
  aspectRatio: string;
}

export default function Home() {

  const defaultImageInfo: ImageInfo = {
    // url: 'https://r2.flux1.ai/fluxai/2024/09/sample%20(2).jpg',
    url: 'https://cdn.pixabay.com/photo/2024/02/22/22/37/mountain-8590965_1280.jpg',
    // aspectRatio: '2:3',
    // aspectRatio: '1:1',
    aspectRatio: '16:9',
  };

  const [imageUrls, setImageUrls] = useState<ImageInfo[]>([defaultImageInfo]); // 存储生成的图片 URL
  const [loading, setLoading] = useState<boolean>(false); // 存储加载状态

  const handleNewImage = (url: ImageInfo) => {
    console.log('新的 URL 信息:', url);
    setImageUrls([url]);

    // if (imageUrls.length > 5) {
    //   setImageUrls((prev) => prev.slice(1));
    // }
    // setImageUrls((prev) => [...prev, url]); // 更新图片 URL 列表
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 mt-20 px-4">
      <div className="xl:w-1/3">
      <SidebarRight onNewImage={handleNewImage} setLoading={setLoading} /> {/* 将更新函数传递给 SidebarRight */}
      </div>
      <div className="xl:w-2/3">
      <Galeria imageUrls={imageUrls} loading={loading} /> {/* 将图片 URL 列表和加载状态传递给 Galeria */}
      </div>
    </div>
  );
}