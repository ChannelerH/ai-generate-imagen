import Image from "next/image";

interface GaleriaProps {
  imageUrls: string[]; // 接收图片 URL 列表
  loading: boolean; // 接收加载状态
}

export const Galeria: React.FC<GaleriaProps> = ({ imageUrls, loading }) => {
  return (
    <section className="h-full">
      <div className="bg-graylight lg:p-6 p-2 rounded-2xl">
        <h2 className="text-white p-4">Related Images</h2>
        <div className="flex flex-wrap gap-4 pt-4 justify-center items-center">
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Generated Image ${index + 1}`}
              width={300}
              height={200}
              className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
            />
          ))}
          {loading && (
            <div className="relative w-[300px] h-[200px] bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
