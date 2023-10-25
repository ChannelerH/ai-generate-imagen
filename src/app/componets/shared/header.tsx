import Image from "next/image";
import { RiNotification2Line, RiMailLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="xl:flex items-center justify-between lg:pb-6">
      <h1 className="text-3xl text-white hover:text-gray-400 hover:transition-colors hidden xl:block">
        AI Generate Imagen
      </h1>
      <div className="flex items-center xl:justify-center justify-end gap-2">
        <RiMailLine
          size={40}
          className=" text-white bg-graylight p-2 rounded-full hover:text-gray-400 hover:transition-colors"
        />

        <RiNotification2Line
          size={40}
          className=" text-white bg-graylight p-2 rounded-full hover:text-gray-400 hover:transition-colors"
        />

        <div className="relative w-11 h-11">
          <Image
            src="https://img.freepik.com/free-photo/pensive-thoughtful-young-businesswoman_329181-11439.jpg?size=626&ext=jpg&ga=GA1.1.1481528647.1685589990&semt=ais"
            alt="Perfil"
            fill
            className="rounded-full object-cover hover:grayscale hover:transition-colors "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
