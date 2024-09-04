"use client";

import { useState } from 'react';
import { Galeria } from "../componets/shared/galeria";
import { SidebarRight } from "../componets/shared/sidebarRight";

export default function Home() {

  const defaultImage = 'https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?size=626&ext=jpg&ga=GA1.1.1481528647.1685589990&semt=ais';

  const [imageUrls, setImageUrls] = useState<string[]>([defaultImage]); // 存储生成的图片 URL
  const [loading, setLoading] = useState<boolean>(false); // 存储加载状态

  const handleNewImage = (url: string) => {
    setImageUrls((prev) => [...prev, url]); // 更新图片 URL 列表
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