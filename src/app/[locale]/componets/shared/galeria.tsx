import Image from "next/image";
import { ImageInfo } from "@/app/[locale]/(root)/page";

interface GaleriaProps {
  imageUrls: ImageInfo[]; // 接收图片 URL 列表
  loading: boolean; // 接收加载状态
}


export const Galeria: React.FC<GaleriaProps> = ({ imageUrls, loading }) => {

    // 比例转换函数
    const convertAspectRatio = (ratio: string): string => {
      return ratio.replace(':', ' / '); // 将 ':' 替换为 ' / '
    };


  return (
    <section className="h-full">
      <div className="bg-graylight lg:p-6 p-2 rounded-2xl">
        <h2 className="text-white p-4">Related Images</h2>
        <div className="flex flex-wrap gap-4 pt-4 justify-center items-center">
          
        {loading ? ( // 如果正在加载
            <div className="relative w-[500px] h-[500px] bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white">Loading...</span>
            </div>
          ) : (
                         // 加载结束后显示图片
            <div className="relative w-full h-auto"> {/* 设置父容器的宽高为自适应 */}
            {imageUrls.map((imageInfo, index) => {
              const aspectRatio = convertAspectRatio(imageInfo.aspectRatio); // 调用转换函数
              return (
                <div
                  key={index}
                  className="relative w-full h-auto"
                  style={{ aspectRatio }} // 使用内联样式设置 aspect-ratio
                >
                  <Image
                    src={imageInfo.url}
                    alt={`Generated Image ${index + 1}`}
                    layout="fill" // 使用 fill 布局
                    objectFit="cover" // 保持图像的纵横比并覆盖父容器
                    sizes="100vw"
                    className="rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
                  />
                </div>
              );
            })}
          </div>
          )}

        </div>
      </div>
    </section>
  );
};
