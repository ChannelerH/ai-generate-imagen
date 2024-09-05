"use client"; // 将组件转换为客户端组件，事件处理程序不能直接传递给服务端组件的 props。
// 需要将部分组件转换为客户端组件。可以通过在文件顶部添加 "use client" 指令来实现。

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { RiRocketLine } from "react-icons/ri";

import { useState } from 'react'; // 导入 useState 钩子
import axios from 'axios'; // 导入 axios 库
import { useCommonContext } from '@/app/context/common-context';

interface SidebarRightProps {
  onNewImage: (url: string) => void; // 接收更新图片 URL 的函数
  setLoading: (loading: boolean) => void; // 接收设置加载状态的函数
}

export const SidebarRight: React.FC<SidebarRightProps> = ({ onNewImage, setLoading }) => {
  const t = useTranslations('ImageModuleText');
  const { setShowLoginModal, userData } = useCommonContext();

  const [message, setMessage] = useState(''); // 定义状态来存储 prompt
  const [selectedRatio, setSelectedRatio] = useState('1:1'); // 默认图片比例为 1:1
  const [selectedNumber, setSelectedNumber] = useState(1); // 默认图片数量为 1
  const [isValid, setIsValid] = useState(false);

  const handleButtonClick = async () => {

    if (message.trim() === '') {
      // Shake the input
      const textarea = document.getElementById('message');
      textarea?.classList.add('shake');
      setTimeout(() => {
        textarea?.classList.remove('shake');
      }, 500);
      return;
    }

    if (!userData) {
      setShowLoginModal(true);
      return;
    }

    setLoading(true);

    const apiKey = process.env.NEXT_PUBLIC_ZHIPU_API_KEY;
    const requestData = {
      model: 'cogview-3',
      prompt: message,
      size: '1024x1024',
    };

    try {
      const response = await axios.post(
        'https://open.bigmodel.cn/api/paas/v4/images/generations',
        requestData,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
      console.log('Response.data:', JSON.stringify(response.data));
      const firstItem = response.data.data[0];
      console.log('First Item URL:', firstItem.url);
      
      const saveImageResponse = await fetch('/api/saveGeneratedImage', {
        method: 'POST',
        body: JSON.stringify({
          email: userData.email,
          imageUrl: firstItem.url,
        }),
      });

      if (!saveImageResponse.ok) {
        console.error('Failed to save image to database');
      }
  
      onNewImage(firstItem.url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

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
          className="bg-white/10 border-none bg-graylight ring-1 ring-gray-500 text-white rounded px-2 pt-2 h-10 w-full appearance-none focus:outline-none resize-none transition-all duration-300"
          value={message}
          onChange={(e) => {
            const newMessage = e.target.value;
            setMessage(newMessage);
            setIsValid(newMessage.trim() !== '');
          }}
        ></textarea>
      </div>

      <div className="pt-2">
        <div className="pt-2">
          <p className="pb-2">{t('imageRatioText')}</p>
          <div className="flex items-end gap-4"> {/* 设置 flex 布局，子元素底部对齐，间距为 4 */}
          <span 
              className={`border border-gray-500 rounded w-12 h-14 flex items-center justify-center ${selectedRatio === '2:3' ? 'bg-primary text-white' : 'bg-white/10 text-white'}`} 
              onClick={() => setSelectedRatio('2:3')} // 点击时设置比例为 2:3
            >
              2:3 {/* 图片比例选项 */}
            </span>
            <span 
              className={`border border-gray-500 rounded w-12 h-12 flex items-center justify-center ${selectedRatio === '1:1' ? 'bg-primary text-white' : 'bg-white/10 text-white'}`} 
              onClick={() => setSelectedRatio('1:1')} // 点击时设置比例为 1:1
            >
              1:1 {/* 图片比例选项 */}
            </span>
            <span 
              className={`border border-gray-500 rounded w-16 h-12 flex items-center justify-center ${selectedRatio === '16:9' ? 'bg-primary text-white' : 'bg-white/10 text-white'}`} 
              onClick={() => setSelectedRatio('16:9')} // 点击时设置比例为 16:9
            >
              16:9 {/* 图片比例选项 */}
            </span>
          </div>
        </div>
      </div>

      {/* <div>
        <p className="py-2">{t('imageNumberText')}</p> 
        <div className="flex gap-4"> 
          {[1, 2, 3, 4, 5].map((num) => ( // 显示图片量选项
          <span 
            key={num} 
            className={`border border-gray-500 px-4 py-2 rounded ${selectedNumber === num ? 'bg-primary text-white' : 'bg-white/10 text-white'}`} 
            onClick={() => setSelectedNumber(num)} // 点击时设置数量
          >
           {num} 
          </span>
          ))}
        </div>
      </div> */}

      <div className="lg:pt-20 pt-10 pb-6">
        <button
          type="submit"
          className={`bg-primary py-2 px-6 rounded-full w-full text-white flex gap-4 items-center justify-center ${
            isValid
              ? 'hover:bg-transparent hover:ring-1 hover:ring-white'
              : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleButtonClick}
          disabled={!isValid}
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
