"use client";

import { cn } from "@/app/[locale]/libs/utils";
import Link from "next/link";
import MainMenu from "@/app/[locale]/componets/shared/mainMenu";
import BotonPro from "@/app/[locale]/componets/shared/ui/botonPro";

interface SidebarProps {
  showMenu: boolean;
  onClose: () => void;
}

const Sidebar = ({ showMenu, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 xl:left-0 xl:w-[15vw] md:w-[40vw] w-[70vw] bg-graylight h-full px-2 flex flex-col justify-between py-10 transition-all duration-300 ease-in-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section>
          <Link
            href="/"
            className="text-primary text-4xl font-bold flex items-center gap-1 px-6 hover:text-white hover:transition-colors hover:duration-300"
          >
            93
            <span className="text-white text-xl font-medium hover:text-primary hover:transition-colors hover:duration-300">
              Brian
            </span>
          </Link>
          <div className="pt-6">
            <MainMenu />
          </div>
        </section>
        <section>
          <BotonPro />
        </section>
      </aside>
      <div
      onClick={onClose}
        className={cn(
          "fixed bg-background z-40 left-0 top-0 w-full h-full",
          showMenu ? "block" : "hidden"
        )}
      ></div>
    </>
  );
};

export default Sidebar;