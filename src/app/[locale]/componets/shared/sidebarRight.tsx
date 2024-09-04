"use client"; // 将组件转换为客户端组件，事件处理程序不能直接传递给服务端组件的 props。
// 需要将部分组件转换为客户端组件。可以通过在文件顶部添加 "use client" 指令来实现。

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { RiRocketLine } from "react-icons/ri";

import { useState } from 'react'; // 导入 useState 钩子
import axios from 'axios'; // 导入 axios 库
import { useSession } from "next-auth/react"; 

interface SidebarRightProps {
  onNewImage: (url: string) => void; // 接收更新图片 URL 的函数
  setLoading: (loading: boolean) => void; // 接收设置加载状态的函数
}

export const SidebarRight: React.FC<SidebarRightProps> = ({ onNewImage, setLoading }) => {
  const t = useTranslations('ImageModuleText');

  const [message, setMessage] = useState(''); // 定义状态来存储 prompt
  const [selectedRatio, setSelectedRatio] = useState('1:1'); // 默认图片比例为 1:1
  const [selectedNumber, setSelectedNumber] = useState(1); // 默认图片数量为 1

  const { data: session, status } = useSession(); // 获取会话数据和状态
  

  const handleButtonClick = async () => {
    console.log('Selected Image Ratio:', selectedRatio); // 打印选中的图片比例
    console.log('Selected Image Number:', selectedNumber); // 打印选中的图片数量
    console.log('Message:', message); // 打印输入的文本

    if (!session) {
        // 用户未登录，发起登录动作
    }

   setLoading(true); // 开始加载

    const apiKey = process.env.NEXT_PUBLIC_ZHIPU_API_KEY; // 从环境变量中获取 API 密钥
    const requestData = {
      model: 'cogview-3',
      prompt: message, // 使用 message 的值
      size: '1024x1024', // 根据页面选项调整参数
    };

    // TODO: 多平台根据配置切换

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
      console.log('Response.data:', JSON.stringify(response.data)); // 打印响应数据
      const firstItem = response.data.data[0];
      console.log('First Item URL:', firstItem.url);

      onNewImage(firstItem.url); // 调用 onNewImage 函数，将生成的图片 URL 传递给父组件
    } catch (error) {
      console.error('Error:', error); // 打印错误信息
    } finally {
      setLoading(false); // 结束加载
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
          className="bg-white/10 border-none bg-graylight ring-1 ring-gray-500 text-white rounded px-2 pt-2 h-10 w-full appearance-none focus:outline-none resize-none"
          value={message} // 绑定状态到文本区域
          onChange={(e) => setMessage(e.target.value)} // 更新状态
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

      <div>
        <p className="py-2">{t('imageNumberText')}</p> {/* 显示翻译后的图片数量文本 */}
        <div className="flex gap-4"> {/* 设置 flex 布局，子元素间距为 4 */}
          {[1, 2, 3, 4, 5].map((num) => ( // 显示图片数量选项
          <span 
            key={num} 
            className={`border border-gray-500 px-4 py-2 rounded ${selectedNumber === num ? 'bg-primary text-white' : 'bg-white/10 text-white'}`} 
            onClick={() => setSelectedNumber(num)} // 点击时设置数量
          >
           {num} {/* 图片数量选项 */}
          </span>
          ))}
        </div>
      </div>

      <div className="lg:pt-20 pt-10 pb-6">
        <button
          type="submit"
          className="bg-primary py-2 px-6 rounded-full w-full text-white hover:bg-transparent hover:ring-1 hover:ring-white flex gap-4 items-center justify-center"
          onClick={handleButtonClick}
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
