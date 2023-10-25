import Link from "next/link";
import {
  RiDashboardLine,
  RiBardFill,
  RiFootballFill,
  RiImageEditFill,
  RiLock2Fill,
  RiLoginCircleFill,
  RiPencilFill,
} from "react-icons/ri";

const MainMenu = () => {
  const routes = [
    {
      id: 1,
      label: "DashBoard",
      icon: RiDashboardLine,
      href: "/",
    },
    {
      id: 2,
      label: "IA Generate Imagen",
      icon: RiBardFill,
      href: "/generate-imagen",
    },
    {
      id: 3,
      label: "Smart Background",
      icon: RiLoginCircleFill,
      href: "/smart-background",
    },
    {
      id: 4,
      label: "Desing Studio",
      icon: RiImageEditFill,
      href: "/desing-studio",
    },
    {
      id: 5,
      label: "IA Stock Photo",
      icon: RiFootballFill,
      href: "/stock-photo",
    },
    {
      id: 6,
      label: "IA Imagen Editor",
      icon: RiPencilFill,
      href: "/imagen-editot",
    },

    {
      id: 7,
      label: "Product Admin",
      icon: RiLock2Fill,
      href: "/product-admin",
    },
  ];

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <div className="py-2">
            <Link
              key={route.href}
              href={route.href}
              className="flex items-center flex-wrap px-6 py-4 gap-2 text-sm hover:bg-gray-700/30 hover:rounded-3xl hover:text-white hover:transition-colors hover:duration-300"
            >
              <route.icon
                size={20}
                className="rounded-xl"
              />
              {route.label}
            </Link>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;
